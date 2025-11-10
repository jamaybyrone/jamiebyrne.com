import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Script from 'next/script'

export const Layout = () => {
  return (
    <Container maxWidth="xl" component="section" aria-labelledby="main-title">
      <Grid container spacing={2} maxWidth="xl" mt={2}>
        <Grid size={{ xs: 12 }}>
          <Typography component="h1" variant="h2" mb={3} id="main-title">
            This a test
          </Typography>
        </Grid>

        <Grid size={{ md: 12 }} component="article">
          <Typography variant="body1" color="secondary" mb={2}>
            This is a test
          </Typography>
          <div id="replaceMe" />
          <Script
            type="module"
            crossOrigin="anonymous"
            src="https://web.dev.hdruk.cloud/api/widget/120-2"
          />
        </Grid>
      </Grid>
    </Container>
  )
}
