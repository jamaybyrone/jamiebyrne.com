import { galleryDataType } from '@/shared/types'
import { OWNER_NAME } from '@/shared/consts/html'
import { HTTPS_WWW_MAIN_DOMAIN } from '@/shared/consts/url'

const pageBody: string =
  'I love to photograph animals of all kinds. I have a handsome German Shepherd who will now and again indulge me by posing for the camera. I especially like photographing pets, preferring a more natural, caught off guard look rather than staged.'

export const data: galleryDataType = {
  pageImage: '/home-2.avif',
  pageTitle: 'Pet Photography',
  pageBody: pageBody,
  pageImages: [
    {
      id: 1,
      image: '/images/gallery/pets/thumb/1.jpg',
      full: '/images/gallery/pets/full/1.jpg',
      title: 'German Shepherd',
      orientation: 'landscape',
      category: ['Dogs'],
      link: ''
    },
    {
      id: 2,
      image: '/images/gallery/pets/thumb/2.jpg',
      full: '/images/gallery/pets/full/2.jpg',
      title: 'Rex Portrait',
      orientation: 'landscape',
      category: ['Dogs'],
      link: ''
    },
    {
      id: 3,
      image: '/images/gallery/pets/thumb/3.jpg',
      full: '/images/gallery/pets/full/3.jpg',
      title: 'Rex action shot',
      orientation: 'landscape',
      category: ['Dogs'],
      link: ''
    },
    {
      id: 4,
      image: '/images/gallery/pets/thumb/4.jpg',
      full: '/images/gallery/pets/full/4.jpg',
      title: 'Dinky in snow',
      orientation: 'landscape',
      category: ['Dogs'],
      link: ''
    },
    {
      id: 5,
      image: '/images/gallery/pets/thumb/5.jpg',
      full: '/images/gallery/pets/full/5.jpg',
      title: 'Dinky Portrait',
      orientation: 'landscape',
      category: ['Dogs'],
      link: ''
    },
    {
      id: 6,
      image: '/images/gallery/pets/thumb/6.jpg',
      full: '/images/gallery/pets/full/6.jpg',
      title: 'Apollo',
      orientation: 'landscape',
      category: ['Dogs'],
      link: ''
    },
    {
      id: 7,
      image: '/images/gallery/pets/thumb/7.jpg',
      full: '/images/gallery/pets/full/7.jpg',
      title: 'Apollo action shot',
      orientation: 'landscape',
      category: ['Dogs'],
      link: ''
    },
    {
      id: 8,
      image: '/images/gallery/pets/thumb/8.jpg',
      full: '/images/gallery/pets/full/8.jpg',
      title: 'Apollo black and white portrait',
      orientation: 'landscape',
      category: ['Dogs'],
      link: ''
    },
    {
      id: 9,
      image: '/images/gallery/pets/thumb/9.jpg',
      full: '/images/gallery/pets/full/9.jpg',
      title: 'Ambi Macro',
      orientation: 'landscape',
      category: ['Cats'],
      link: ''
    },
    {
      id: 10,
      image: '/images/gallery/pets/thumb/10.jpg',
      full: '/images/gallery/pets/full/10.jpg',
      title: 'Dez',
      orientation: 'landscape',
      category: ['Equistry'],
      link: ''
    },
    {
      id: 11,
      image: '/images/gallery/pets/thumb/11.jpg',
      full: '/images/gallery/pets/full/11.jpg',
      title: 'Ambi black and white',
      orientation: 'landscape',
      category: ['Cats'],
      link: ''
    },
    {
      id: 12,
      image: '/images/gallery/pets/thumb/12.jpg',
      full: '/images/gallery/pets/full/12.jpg',
      title: 'Stranger',
      orientation: 'landscape',
      category: ['Cats'],
      link: ''
    }
  ],
  meta: {
    title: `Pets - ${OWNER_NAME} Nature & Landscape Photography`,
    description: pageBody,
    image: `${HTTPS_WWW_MAIN_DOMAIN}/images/backgrounds/og-2.jpg`,
    url: `${HTTPS_WWW_MAIN_DOMAIN}/pets`
  }
}
