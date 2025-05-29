import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Gallery from '@/components/gallery'
import { pageImages } from '@/app/rex/data'
import Grid from '@mui/material/Grid'

export const Layout = () => {
  return (
    <Container maxWidth="xl" component="section" aria-labelledby="main-title">
      <Grid container spacing={2} maxWidth="xl" mt={2}>
        <Grid size={{ xs: 12 }}>
          <Typography component="h1" variant="h2" mb={3} id="main-title">
            The story of Rex
          </Typography>
          <Image
            src="/images/rex/FB_IMG_1555168401933.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Rex and his poppy"
            quality={100}
          />
        </Grid>

        <Grid size={{ md: 8 }} component="article">
          <Typography variant="body1" color="secondary" mb={2}>
            This began in early 2010. My roommate had moved out. The area I
            lived in wasn’t the greatest, and I felt a little vulnerable —
            especially after a group of lads tried breaking into my house...
            while I was in. My girlfriend at the time suggested getting a dog,
            and she offered to help me find one.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            We searched the internet for local ads until I found one on Gumtree
            for a ‘puppy German Shepherd’ looking for a new home. The owner
            could no longer care for him. There was a picture — a black and tan
            German Shepherd puppy. He was beautiful! Adorable! So cute!
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            I got in contact with the owner, who explained he had become a
            little too boisterous for her... so we arranged a visit. On the
            drive there, we passed a pub that had advertised German Shepherd
            puppies for sale. Great, I thought — if this doesn’t work out, we
            can stop there!
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            We arrived at the house and were greeted by the owner. As we walked
            through the door, a giant, fully-grown Shepherd came charging at me
            and jumped up, paws on my shoulders, barking in my face...
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            I looked him dead in the eye and told him to get down. He did. This
            was Rex — not a puppy as advertised, but a two-year-old German
            Shepherd. He proceeded to knock over the bin and bring me a plastic
            bottle as a toy, as he had none. He was being fed chocolate biscuits
            and, besides a tiny 6&lsquo;x6&lsquo; garden, he had never been
            outside... in two years.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            We left the house without Rex. Back in the car, my girlfriend turned
            to me and said, “You either go back into that house and take that
            dog off that woman, or I will.”
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            So I went back to the house and got her to sign him over to me — and
            off we went.
          </Typography>
        </Grid>

        <Grid size={{ md: 4 }} sx={{ textAlign: 'center' }}>
          <Image
            src="/images/rex/IMG_20200814_132840.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Rex kayaking"
            quality={100}
          />
        </Grid>

        <Grid size={{ md: 8 }} component='article'>
          <Typography variant="body1" color="secondary" mb={2}>
            We returned to my hometown and decided to take him to the park.
            That’s when we discovered he needed to be muzzled — he tried to
            attack everything and everyone.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            I started walking him at night when it was quiet and gradually got
            him used to traffic noises and other stimuli. The first time he saw
            a plane, he jumped up barking at the sky.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            I sought help from a local dog academy that specialised in
            rehabilitation. After doggy school, he still wasn’t fully cured and
            still needed the muzzle.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            I decided to buy a few books on dog behaviour and body language and
            began teaching myself how to understand and recognise things.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            After three years of working with him, he was cured. No muzzle
            required. We got into hiking, camping, and kayaking — basically,
            ADVENTURES.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            We travelled up and down the country, exploring anywhere we could.
            We slept under starry skies in a forest or two.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            We also got really into dog shows, and Rex became a number one prize
            winner in nearly every show we attended!
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            Eventually, old age caught up with Rex. He needed hydrotherapy, and
            the adventures stopped.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            Rex passed away on 03/09/2024. Our final walk was in his beloved
            forest, where he ate the forbidden cheeseburgers.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            He was a good boy — my bestest friend.
          </Typography>

          <Typography variant="body1" color="secondary">
            My heart has a hole that cannot be filled.
          </Typography>
        </Grid>

        <Grid size={{ md: 4 }} sx={{ textAlign: 'center' }}>
          <Image
            src="/images/rex/IMG_20190721_205847.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Rex and his prizes"
            quality={100}
          />
        </Grid>
      </Grid>

      <Container maxWidth="lg" component="section" aria-label="Gallery for Rex">
        <Gallery items={pageImages} />
      </Container>
    </Container>
  )
}
