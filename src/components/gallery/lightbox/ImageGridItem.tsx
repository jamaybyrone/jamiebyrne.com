import { Grid, Link } from '@mui/material'
import Image from 'next/image'
import { imageType } from '@/shared/types'

interface ImageGridItemProps {
  image: imageType
  index: number
  handleClick: (index: number) => void
  quality: number
}

export function ImageGridItem({
  image,
  index,
  handleClick,
  quality
}: Readonly<ImageGridItemProps>) {
  const { id, image: src, title, orientation } = image
  const md = orientation === 'landscape' ? 4 : 3
  const width = orientation === 'landscape' ? 342 : 234
  // const height = orientation === 'landscape' ? 228 : 352

  return (
    <Grid
      size={{ xs: 12, md }}
      sx={{ textAlign: 'center' }}
      key={`grid-${id}`}
    >
      <Link
        component="button"
        onClick={() => handleClick(index)}
        data-cy={`test-${title.replace(' ', '')}`}
        aria-label={`Enlarge photo of ${title}`}
      >
        <Image
          src={src}
          width={0}
          height={0}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: width
          }}
          alt={title}
          key={`image-${id}`}
          quality={quality}
          sizes="100vw"
          loading="lazy"
        />
      </Link>
    </Grid>
  )
}
