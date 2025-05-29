import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { AboutCard } from '@/layouts/home/component/about-card'
import Image from 'next/image'
import Link from 'next/link'

export const Layout = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        component="section"
        sx={{ mt: 6 }}
        aria-labelledby="main-section"
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Typography
              variant="h1"
              color="secondary"
              id={'main-section'}
              mt={2}
            >
              About Me
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h2" mb={3} id={'photography-section'}>
              Photography
            </Typography>
          </Grid>
          <Grid
            size={{ md: 8 }}
            component="article"
            aria-labelledby={'photography-section'}
          >
            <AboutCard />
          </Grid>
          <Grid size={{ md: 4 }} sx={{ textAlign: 'center' }}>
            <Image
              src="/images/me.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
              alt={'Me'}
              quality={100}
            />
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xl"
        component="section"
        sx={{ mt: 6 }}
        aria-labelledby="pause-section"
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Typography
              variant="h2"
              id="pause-section"
              gutterBottom
              color="secondary"
            >
              A Creative Pause: Where I’ve Been and What’s Coming Next
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }} component="article">
            <Typography variant="body1" color="secondary">
              Photography has always been a huge part of how I connect with the
              world — finding beauty in light, shadow, and the quiet in-between
              moments. Over the years, it’s taken me on an incredible journey of
              creativity and connection. But for now, the camera is resting.
            </Typography>

            <Typography variant="body1" color="secondary" mt={2}>
              I’m currently taking a break from photography as I focus my energy
              on restoring a 1950s bungalow — a personal project that’s as much
              about craftsmanship as it is about creativity. The process has
              been hands-on and transformative, giving me a fresh appreciation
              for space, detail, and design. From sanding floors to uncovering
              mid-century quirks, it’s been a rewarding detour from the
              viewfinder.
            </Typography>

            <Typography variant="body1" color="secondary" mt={2}>
              That said, this is just a pause — not a full stop. Photography
              will be back in my life soon, and when it returns, it’ll come with
              new stories, new inspiration, and a new setting (with some
              seriously good lighting).
            </Typography>

            <Typography variant="body1" color="secondary" mt={2}>
              While I’ve stepped away from photos, I’m very much still working —
              as a <strong>full stack developer</strong>. My background spans
              frontend and backend development, with experience building
              responsive, accessible, and high-performance applications across
              modern tech stacks. If you’re here looking for code, not cameras —
              you’re in luck. There’s a link to my CV in the navigation above
              where you can learn more about my work and experience.
            </Typography>

            <Typography variant="body1" color="secondary" mt={2}>
              I also own a professional printer and have plans to make a curated
              selection of my prints available to purchase. I have a version of
              this website, in a branch which has been built using{' '}
              <Link
                href={'https://medusajs.com/'}
                target={'_blank'}
                rel="noopener noreferrer"
              >
                <strong>MedusaJS</strong>
              </Link>
              , a powerful headless e-commerce framework, specifically to
              support this — the print store will be launching soon.
            </Typography>

            <Typography variant="body1" color="secondary" mt={2} mb={4}>
              This season is one of renovation — both in brick and in spirit.
              Whether you’re here for photos, code, or curiosity, thanks for
              stopping by. I look forward to sharing the next chapter with you.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
