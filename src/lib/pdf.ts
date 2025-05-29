import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

interface WorkExperience {
  company: string
  role: string
  startDate: string
  endDate: string
  description: string
}

export interface CVType {
  name: string
  email: string
  address: string
  githubUrl: string
  websiteUrl: string
  thumbnailUrl: string
  workExperience: WorkExperience[]
  skills: string[]
}
function sanitizeText(text: string): string {
  return text.replace(/\r/g, '')
}

function wrapText(
  text: string,
  maxWidth: number,
  font: any,
  fontSize: number
): string[] {
  const words = text.split(' ')
  let lines: string[] = []
  let currentLine = ''

  words.forEach((word) => {
    const testLine = currentLine ? `${currentLine} ${word}` : word
    const textWidth = font.widthOfTextAtSize(testLine, fontSize)

    if (textWidth <= maxWidth) {
      currentLine = testLine
    } else {
      lines.push(currentLine)
      currentLine = word
    }
  })

  if (currentLine) {
    lines.push(currentLine)
  }

  return lines
}

export async function generateCV(cvData: CVType) {
  const pdfDoc = await PDFDocument.create()
  const pageWidth = 600
  const pageHeight = 800

  const black = rgb(0, 0, 0)
  const white = rgb(1, 1, 1)

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const marginX = 200

  let page = pdfDoc.addPage([pageWidth, pageHeight])
  let contentY = pageHeight - 50

  const createNewPage = () => {
    page = pdfDoc.addPage([pageWidth, pageHeight])
    contentY = pageHeight - 70
    page.drawRectangle({
      x: 0,
      y: 0,
      width: 180,
      height: pageHeight,
      color: black
    })
  }

  page.drawRectangle({
    x: 0,
    y: 0,
    width: 180,
    height: pageHeight,
    color: black
  })

  let thumbnailHeight = 100
  if (cvData.thumbnailUrl) {
    const imageBytes = await fetch(cvData.thumbnailUrl).then((res) =>
      res.arrayBuffer()
    )
    const thumbnailImage = await pdfDoc.embedJpg(imageBytes)
    const thumbnailDims = thumbnailImage.scaleToFit(100, 100)
    page.drawImage(thumbnailImage, {
      x: 40,
      y: pageHeight - thumbnailHeight - 40,
      width: thumbnailDims.width,
      height: thumbnailDims.height
    })
  }

  page.drawText(cvData.name, {
    x: 20,
    y: pageHeight - thumbnailHeight - 60,
    size: 14,
    font: boldFont,
    color: white
  })

  const contactStartY = pageHeight - 200
  const contactInfo = [
    {
      label: 'Email:',
      text: cvData.email
    },
    {
      label: 'GitHub:',
      text: cvData.githubUrl
    },
    {
      label: 'Website:',
      text: cvData.websiteUrl
    }
  ]
  let contactY = contactStartY

  contactInfo.forEach((line) => {
    page.drawText(line.label, {
      x: 20,
      y: contactY,
      size: 10,
      font,
      color: white
    })
    contactY -= 15
    page.drawText(line.text, {
      x: 20,
      y: contactY,
      size: 10,
      font,
      color: white
    })
    contactY -= 30
  })

  page.drawText('Skills', {
    x: marginX,
    y: contentY,
    size: 16,
    font: boldFont,
    color: black
  })
  contentY -= 20

  cvData.skills.forEach((skill, index) => {
    if (contentY <= 50) {
      createNewPage()
    }
    page.drawText(`• ${skill}`, {
      x: marginX,
      y: contentY,
      size: 12,
      font,
      color: black
    })
    contentY -= 15
  })

  contentY -= 20

  page.drawText('Experience', {
    x: marginX,
    y: contentY,
    size: 16,
    font: boldFont,
    color: black
  })
  contentY -= 20

  const maxWidth = pageWidth - marginX - 20
  const fontSize = 12

  cvData.workExperience.forEach((work) => {
    if (contentY <= 50) {
      createNewPage()
    }

    const roleText = `${work.role} -`
    const companyText = work.company
    const dateText = `(${work.startDate} - ${work.endDate})`
    const description = sanitizeText(work.description)

    page.drawText(roleText, {
      x: marginX,
      y: contentY,
      size: 10,
      font: boldFont,
      color: black
    })

    contentY -= 15

    page.drawText(companyText, {
      x: marginX,
      y: contentY,
      size: 12,
      font: boldFont,
      color: black
    })

    contentY -= 20

    page.drawText(dateText, {
      x: marginX,
      y: contentY,
      size: 10,
      font,
      color: black
    })
    contentY -= 20

    const descriptionLines = description.split('\n')

    descriptionLines.forEach((line) => {
      if (contentY <= 50) {
        createNewPage()
      }

      const newDescriptionLines = wrapText(line, maxWidth, font, fontSize)
      newDescriptionLines.forEach((line) => {
        if (contentY - fontSize < 50) {
          createNewPage()
        }
        page.drawText(line, {
          x: marginX,
          y: contentY,
          size: 10,
          font,
          color: black
        })
        contentY -= fontSize + 2
      })

      contentY -= 12
    })

    contentY -= 20
  })

  return await pdfDoc.save()
}
