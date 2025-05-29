import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Gallery from '@/components/gallery'
import { pageImages } from '@/app/rex/data'
import Grid from '@mui/material/Grid'

export const Layout = () => {
  return (
    <Container maxWidth="xl" component="section" aria-labelledby="main-title">
      <Grid container spacing={2} maxWidth="xl" mt={2} component="article">
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
            alt={'Me'}
            quality={100}
          />
        </Grid>
        <Grid size={{ md: 8 }}>
          <Typography variant="body1" color="secondary" mb={2}>
            This begins in early 2010 my room mate moved out. The area I lived
            in was not the greatest and I felt a little vulnerable, especially
            after a group of lads tried breaking into my house... whilst I was
            in... my girlfriend at the time suggested getting a dog and she
            would help me find one.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            We searched the internet for local adds until I discovered an add on
            gumtree for a &lsquo;puppy German Shepherd&rsquo; looking for a new home after
            the current owner could no longer care for him, there was a picture
            a black and tan German shepherd puppy. He was beautiful! adorable!
            so cute!
          </Typography>
          <Typography variant="body1" color="secondary" mb={2}>
            I got in contact with the owner who explained he had become a little
            too boisterous for her.. so... we arranged a visit. On the drive
            there we passed a pub that had advertised German shepherd puppies
            for sale, great I thought if this doesn’t work out we can stop off
            there!
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            We arrived at the house, we were greeted by owner and then we walked
            through the door.. only for this giant fully grown shepherd to come
            charging at me and proceed to jump up with his paws on my shoulders
            barking at my face...
          </Typography>
          <Typography variant="body1" color="secondary" mb={2}>
            I gazed him dead in the eye and told him to get down. He did... this
            was Rex... not a puppy as advertised but a 2 year old German
            shepherd dog... he proceeded to knock over the bin and bring me a
            plastic bottle as a toy as he had none... he was being fed chocolate
            biscuits and besides a tiny garden no longer than 6&apos;x6&apos; he had never
            been outside... in his 2 years...
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            We left the house, without Rex.... we got back to the car and my
            girlfriend turned to me and just said you either go back into that
            house and take that dog off that women or I will....
          </Typography>
          <Typography variant="body1" color="secondary" mb={2}>
            So I went back to the house and got her to sign him over to me.. and
            off we left...
          </Typography>
        </Grid>

        <Grid size={{ md: 4 }} sx={{ textAlign: 'center' }}>
          <Image
            src="/images/rex/IMG_20200814_132840.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt={'Me'}
            quality={100}
          />
        </Grid>

        <Grid size={{ md: 8 }}>
          <Typography variant="body1" color="secondary" mb={2}>
            We got back to my home town and decided to try to take him to the
            park... this is where we discovered he should be muzzled as he tried
            to kill everything and anyone...
          </Typography>
          <Typography variant="body1" color="secondary" mb={2}>
            I started walking him at night when it was quiet and slowly started
            getting him used to traffic sounds etc. The first time he saw a
            plane he was jumping up barking at the sky.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            I sought help from the local dog academy that specialized in
            rehabilitation. After his doggy school he still was not fully cured
            and still needed the muzzle...
          </Typography>
          <Typography variant="body1" color="secondary" mb={2}>
            I decided to purchase a few books on dog behaviour and body language
            and tried to teach myself some things and ways of recognizing.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            After 3 years of working on him, he was cured. No muzzle required.
            We then got into hiking, camping and kayaking. Basically ADVENTURES.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            We travelled up and down the country exploring anywhere we could. We
            have slept under stary skys in a forest or two.
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            We also got really into dog shows and rex became a number 1 prize
            winner in almost all shows we went to!
          </Typography>

          <Typography variant="body1" color="secondary" mb={2}>
            Eventually old age caught up with Rex. We need hydrotherapy... and
            the adventures stopped.
          </Typography>
          <Typography variant="body1" color="secondary" mb={2}>
            Rex passed away on the 03/09/2024 our final walk was in his beloved
            Forest where he ate the forbidden cheese burgers.
          </Typography>
          <Typography variant="body1" color="secondary" mb={2}>
            He was a good boy and my bestest friend.
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
            alt={'Me'}
            quality={100}
          />
        </Grid>
      </Grid>
      <Container
        maxWidth="lg"
        component="section"
        aria-label={'Gallery for Rex'}
      >
        <Gallery items={pageImages} />
      </Container>
    </Container>
  )
}
