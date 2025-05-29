import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { imageType } from '@/shared/types'
import { galleryPageStyle } from './style'
import Gallery from '@/components/gallery'


interface GalleryPageProp {
  image: string
  title: string
  body: string
  data: imageType[]
  extraStyle?: object
  dark?: boolean
}

const Layout = ({
  image,
  title,
  body,
  data,
  extraStyle,
  dark
}: GalleryPageProp) => {
const sectionId = 'gallery-title'

  return (
    <>
      <Container
        component="section"
        maxWidth={false}
        disableGutters
        sx={{
          backgroundImage: {xs: `url(/images/backgrounds/${image.replace('.avif', '-min.avif')})`, md: `url(/images/backgrounds/${image})`},
          height: {
            xs: '300px',
            md: '500px'
          },
          ...galleryPageStyle.container,
          ...extraStyle
        }}
      >
        <Typography
          variant="h1"
          id={sectionId}
          sx={{
            ...galleryPageStyle.h1,
            fontSize: {
              xs: '2rem',
              md: '3.5rem'
            }
          }}
          color={dark ? 'secondary' : 'primary'}
        >
          {title}
        </Typography>
      </Container>
      <Container maxWidth="md" component="section" aria-labelledby={sectionId}>
        <Grid container spacing={2} maxWidth="md" mb={2} mt={2}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="body1" color="secondary">
              {body}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="lg"
        component="section"
        aria-label={'Gallery for ' + title}
      >
        <Gallery items={data} />
      </Container>
    </>
  )
}
export default Layout
