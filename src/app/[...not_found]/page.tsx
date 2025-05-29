import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Viewport } from 'next/types'
import { data } from '@/app/[...not_found]/data'
import meta from '@/lib/meta'
import { viewPort } from '@/shared/consts/meta'
import { useId } from 'react'

export const viewport: Viewport = viewPort
export const metadata = meta(data.meta, {
  index: false,
  follow: false,
  nocache: false,
  googleBot: {
    index: false,
    follow: false
  }
})

export default function NotFoundCatchAll() {
  const mainSectionId = useId()
  return (
    <Container
      maxWidth="md"
      component="section"
      aria-labelledby={mainSectionId}
    >
      <Typography variant="h1" color="secondary" id={mainSectionId} mt={2}>
        Page not found
      </Typography>
    </Container>
  )
}
