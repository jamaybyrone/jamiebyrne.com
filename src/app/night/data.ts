import { galleryDataType } from '@/shared/types'
import { OWNER_NAME } from '@/shared/consts/html'
import { HTTPS_WWW_MAIN_DOMAIN } from '@/shared/consts/url'

const pageBody: string =
  'There is nothing more beautiful than the night sky and when you\'re out in the peak district hills you can get some pretty spectacular glimpses of the great beyond. On more than one occasion I have set off on a moonless night out into the bleak, cold and dark to capture some beauty in the peaks.'

export const data: galleryDataType = {
  pageImage: '/home-4.avif',
  pageTitle: 'Night Photography',
  pageBody: pageBody,
  pageImages: [
    {
      id: 1,
      image: '/images/gallery/night/thumb/1.jpg',
      full: '/images/gallery/night/full/1.jpg',
      title: 'Moon Shot',
      orientation: 'landscape',
      category: ['Moon'],
      link: ''
    },
    {
      id: 2,
      image: '/images/gallery/night/thumb/2.jpg',
      full: '/images/gallery/night/full/2.jpg',
      title: 'Purple Haze',
      orientation: 'landscape',
      category: ['Stars'],
      link: ''
    },
    {
      id: 3,
      image: '/images/gallery/night/thumb/3.jpg',
      full: '/images/gallery/night/full/3.jpg',
      title: 'Forest Sky',
      orientation: 'landscape',
      category: ['Stars'],
      link: ''
    },
    {
      id: 4,
      image: '/images/gallery/night/thumb/4.jpg',
      full: '/images/gallery/night/full/4.jpg',
      title: 'Valley Sky',
      orientation: 'Portrait',
      category: ['Stars'],
      link: ''
    },
    {
      id: 5,
      image: '/images/gallery/night/thumb/5.jpg',
      full: '/images/gallery/night/full/5.jpg',
      title: 'Seven Sisters',
      orientation: 'Portrait',
      category: ['Stars'],
      link: ''
    },
    {
      id: 6,
      image: '/images/gallery/night/thumb/6.jpg',
      full: '/images/gallery/night/full/6.jpg',
      title: 'Morning Gaze',
      orientation: 'Portrait',
      category: ['Stars'],
      link: ''
    },
    {
      id: 7,
      image: '/images/gallery/night/thumb/7.jpg',
      full: '/images/gallery/night/full/7.jpg',
      title: 'Forest Sky',
      orientation: 'Portrait',
      category: ['Stars'],
      link: ''
    },
    {
      id: 8,
      image: '/images/gallery/night/thumb/8.jpg',
      full: '/images/gallery/night/full/8.jpg',
      title: 'Mining Stars',
      orientation: 'Portrait',
      category: ['Stars'],
      link: ''
    },
    {
      id: 9,
      image: '/images/gallery/night/thumb/9.jpg',
      full: '/images/gallery/night/full/9.jpg',
      title: 'Dream',
      orientation: 'Portrait',
      category: ['Stars'],
      link: ''
    }
  ],
  meta: {
    title: `Night - ${OWNER_NAME} Nature & Landscape Photography`,
    description: pageBody,
    image: `${HTTPS_WWW_MAIN_DOMAIN}/images/backgrounds/og-4.jpg`,
    url: `${HTTPS_WWW_MAIN_DOMAIN}/night`
  }
}
