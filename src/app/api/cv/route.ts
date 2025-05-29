import { CVData } from '@/shared/data'
import rateLimit from 'next-rate-limit'
import { NextRequest } from 'next/server'
import { CVType, generateCV } from '@/lib/pdf'

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

  try {
    const cvData: CVType = CVData
    const pdfBytes = await generateCV(cvData)

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
