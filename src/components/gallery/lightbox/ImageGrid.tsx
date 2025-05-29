import Grid from '@mui/material/Grid'
import { ImageGridItem } from './ImageGridItem'
import { imageType } from '@/shared/types'

interface ImageGridProps {
  data: imageType[]
  handleImageAndDialog: (index: number) => void
  quality: number
}

export function ImageGrid({
  data,
  handleImageAndDialog,
  quality
}: Readonly<ImageGridProps>) {
  return (
    <Grid container maxWidth="xl" spacing={2}>
      <>
        {data.map((image, index) => (
          <ImageGridItem
            key={image.id}
            image={image}
            index={index}
            handleClick={handleImageAndDialog}
            quality={quality}
          />
        ))}
      </>
    </Grid>
  )
}
