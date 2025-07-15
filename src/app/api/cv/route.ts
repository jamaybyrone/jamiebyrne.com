import { CVData, fullWorkExp } from '@/shared/data'
import rateLimit from 'next-rate-limit'
import { NextRequest } from 'next/server'
import { CVType, generateCV } from '@/lib/pdf'

const { CV_PASSWORD, CONTACT_NUMBER } = process.env

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 20
})

export async function GET(req: NextRequest): Promise<Response> {
  try {
    limiter.checkNext(req, 10)
  } catch (F) {
    return new Response('Too many requests, what you doin?', { status: 429 })
  }

  const { searchParams } = new URL(req.url)
  const password = searchParams.get('password')
  const showFull = searchParams.get('showFull')

  const showMobileNumber = CV_PASSWORD === password



  try {
    const cvData: CVType = CVData
    if(showFull){
      cvData.workExperience = [
        ...cvData.workExperience,
        ...fullWorkExp
      ]
    }


    const pdfBytes = await generateCV(cvData, showMobileNumber, CONTACT_NUMBER)

    return new Response(pdfBytes, {
      status: 200,
      headers: {
        'Cache-Control': 's-maxage=86400',
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename=JamieByrneCV.pdf'
      }
    })
  } catch (error) {
    console.error('Error generating CV:', error)
    return new Response('Error generating CV', { status: 500 })
  }
}
