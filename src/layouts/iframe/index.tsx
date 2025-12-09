import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

export const Layout = () => {
  return (
    <Container maxWidth="xl" component="section" aria-labelledby="main-title">
      <Grid container spacing={2} maxWidth="xl" mt={2}>
        <Grid size={{ xs: 12 }}>
          <Typography component="h1" variant="h2" mb={3} id="main-title">
            This a test
          </Typography>
        </Grid>

        <Grid size={{ xs: 12 }} component="article">
          <div
            style={{
              position: 'relative',
              width: '600px',
              height: '740px',
              maxWidth: '100%'
            }}
          >
            <iframe
              title="HDR Gateway Widget"
              src="https://web.preprod.hdruk.cloud/api/widget/133-1"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0
              }}
              allowFullScreen=""
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
