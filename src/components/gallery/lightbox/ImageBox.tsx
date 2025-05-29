import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { galleryStyle } from '@/components/gallery/style'
import { ReactNode } from 'react'
import { OWNER_NAME } from '@/shared/consts/html'

interface ImageBoxProps {
  title: string
  position: number
  totalImages: number
  children: ReactNode
}

export const ImageBox = ({
  title,
  position,
  totalImages,
  children
}: ImageBoxProps) => {
  return (
    <figure style={{ textAlign: 'center' }}>
      {children}
      <Box component="figcaption">
        <Grid container maxWidth="xl" spacing={2}>
          <Grid size={{ xs: 7 }} sx={{ textAlign: 'left' }}>
            <Typography variant="body1" sx={galleryStyle.imageBox.body}>
              {title}
            </Typography>
            <Typography variant="body1" sx={galleryStyle.imageBox.author}>
              {'By ' + OWNER_NAME}
            </Typography>
          </Grid>
          <Grid size={{ xs: 5 }}>
            <Typography
              variant="body1"
              sx={galleryStyle.imageBox.body}
              align="right"
              data-cy="counter"
            >
              {position + 1} of {totalImages}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </figure>
  )
}
