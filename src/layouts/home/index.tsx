import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
export const Layout = () => {
  const sectionId = 'home-id'
  const paperContainer = {
    backgroundImage: 'url(/images/2_new.webp)',
    borderRadius: 0,
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
  return (
    <Paper
      style={paperContainer}
      component="section"
      aria-labelledby={sectionId}
    >
      <Typography
        variant="h1"
        mb={1}
        id={sectionId}
        sx={{ maxWidth: 400, textAlign: 'center' }}
      >
        Nature & Landscape Photography
      </Typography>
    </Paper>
  )
}
