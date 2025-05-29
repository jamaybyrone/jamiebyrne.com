import { galleryDataType } from '@/shared/types'
import { OWNER_NAME } from '@/shared/consts/html'
import { HTTPS_WWW_MAIN_DOMAIN } from '@/shared/consts/url'

const pageBody: string =
  'Wildlife & Nature photography is my true passion, observing creatures being their own individual selves and the wildness of nature out in the elements. I dream of one day photographing the Scottish wild cats and pine martens. In particular, small birds are some of my favorite things to photograph.'

export const data: galleryDataType = {
  pageImage: '/home-5.avif',
  pageTitle: 'Macro Photography',
  pageBody: pageBody,
  pageImages: [
    {
      id: 1,
      image: '/images/gallery/macro/thumb/1.jpg',
      full: '/images/gallery/macro/full/1.jpg',
      title: 'Rose',
      orientation: 'landscape',
      category: ['Flowers'],
      link: ''
    },
    {
      id: 2,
      image: '/images/gallery/macro/thumb/2.jpg',
      full: '/images/gallery/macro/full/2.jpg',
      title: 'Sunflower',
      orientation: 'landscape',
      category: ['Flowers'],
      link: ''
    },
    {
      id: 3,
      image: '/images/gallery/macro/thumb/3.jpg',
      full: '/images/gallery/macro/full/3.jpg',
      title: 'Wildflower',
      orientation: 'landscape',
      category: ['Flowers'],
      link: ''
    },
    {
      id: 4,
      image: '/images/gallery/macro/thumb/4.jpg',
      full: '/images/gallery/macro/full/4.jpg',
      title: 'Wildflower',
      orientation: 'landscape',
      category: ['Flowers'],
      link: ''
    },
    {
      id: 5,
      image: '/images/gallery/macro/thumb/5.jpg',
      full: '/images/gallery/macro/full/5.jpg',
      title: 'Tradescantia zebrina',
      orientation: 'landscape',
      category: ['Flowers'],
      link: ''
    },
    {
      id: 6,
      image: '/images/gallery/macro/thumb/6.jpg',
      full: '/images/gallery/macro/full/6.jpg',
      title: 'Black thorn',
      orientation: 'landscape',
      category: ['Flowers'],
      link: ''
    },
    {
      id: 7,
      image: '/images/gallery/macro/thumb/7.jpg',
      full: '/images/gallery/macro/full/7.jpg',
      title: 'Wildflower',
      orientation: 'landscape',
      category: ['Flowers'],
      link: ''
    },
    {
      id: 8,
      image: '/images/gallery/macro/thumb/8.jpg',
      full: '/images/gallery/macro/full/8.jpg',
      title: 'Wildflower',
      orientation: 'landscape',
      category: ['Flowers'],
      link: ''
    },
    {
      id: 9,
      image: '/images/gallery/macro/thumb/9.jpg',
      full: '/images/gallery/macro/full/9.jpg',
      title: 'Wildflower',
      orientation: 'landscape',
      category: ['Flowers'],
      link: ''
    },
    {
      id: 10,
      image: '/images/gallery/macro/thumb/10.jpg',
      full: '/images/gallery/macro/full/10.jpg',
      title: 'Wildflower',
      orientation: 'landscape',
      category: ['Flowers'],
      link: ''
    },
    {
      id: 11,
      image: '/images/gallery/macro/thumb/11.jpg',
      full: '/images/gallery/macro/full/11.jpg',
      title: 'Wildflower',
      orientation: 'landscape',
      category: ['Flowers'],
      link: ''
    },
    {
      id: 12,
      image: '/images/gallery/macro/thumb/12.jpg',
      full: '/images/gallery/macro/full/12.jpg',
      title: 'Wildflower',
      orientation: 'landscape',
      category: ['Flowers'],
      link: ''
    },
    {
      id: 13,
      image: '/images/gallery/macro/thumb/13.jpg',
      full: '/images/gallery/macro/full/13.jpg',
      title: 'Humble Bumble',
      orientation: 'landscape',
      category: ['Insects'],
      link: ''
    },
    {
      id: 14,
      image: '/images/gallery/macro/thumb/14.jpg',
      full: '/images/gallery/macro/full/14.jpg',
      title: 'Hairy Legs',
      orientation: 'landscape',
      category: ['Insects'],
      link: ''
    },
    {
      id: 15,
      image: '/images/gallery/macro/thumb/15.jpg',
      full: '/images/gallery/macro/full/15.jpg',
      title: 'Solitary Bee',
      orientation: 'landscape',
      category: ['Insects'],
      link: ''
    },
    {
      id: 16,
      image: '/images/gallery/macro/thumb/16.jpg',
      full: '/images/gallery/macro/full/16.jpg',
      title: 'Worker Bee',
      orientation: 'landscape',
      category: ['Insects'],
      link: ''
    }
  ],
  meta: {
    title: `Macro - ${OWNER_NAME} Nature & Landscape Photography`,
    description: pageBody,
    image: `${HTTPS_WWW_MAIN_DOMAIN}/images/backgrounds/og-5.jpg`,
    url: `${HTTPS_WWW_MAIN_DOMAIN}/macro`
  }
}
