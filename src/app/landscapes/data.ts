import { galleryDataType } from '@/shared/types'
import { OWNER_NAME } from '@/shared/consts/html'
import { HTTPS_WWW_MAIN_DOMAIN } from '@/shared/consts/url'

const pageBody: string =
  'I love to be out in the hills or in a forest and I will often search high and low for an exciting looking tree. This was the start of photography for me, I was already an eager hiker and explorer, so combining landscape photography with hiking was a breeze, except of course, for the extra weight on my back!'

export const data: galleryDataType = {
  pageImage: '/home-1.avif',
  pageTitle: 'Landscape Photography',
  pageBody: pageBody,
  pageImages: [
    {
      id: 1,
      image: '/images/gallery/landscapes/thumb/1.jpg',
      full: '/images/gallery/landscapes/full/1.jpg',
      title: 'Serenity',
      orientation: 'landscape',
      category: ['Forests'],
      link: ''
    },
    {
      id: 2,
      image: '/images/gallery/landscapes/thumb/2.jpg',
      full: '/images/gallery/landscapes/full/2.jpg',
      title: 'Resilience',
      orientation: 'landscape',
      category: ['Forests'],
      link: ''
    },
    {
      id: 3,
      image: '/images/gallery/landscapes/thumb/3.jpg',
      full: '/images/gallery/landscapes/full/3.jpg',
      title: 'Misty Woodland',
      orientation: 'landscape',
      category: ['Forests'],
      link: ''
    },
    {
      id: 4,
      image: '/images/gallery/landscapes/thumb/4.jpg',
      full: '/images/gallery/landscapes/full/4.jpg',
      title: 'Milky Way',
      orientation: 'landscape',
      category: ['Mountains'],
      link: ''
    },
    {
      id: 5,
      image: '/images/gallery/landscapes/thumb/5.jpg',
      full: '/images/gallery/landscapes/full/5.jpg',
      title: 'Cold Shutlins',
      orientation: 'landscape',
      category: ['Open'],
      link: ''
    },
    {
      id: 6,
      image: '/images/gallery/landscapes/thumb/6.jpg',
      full: '/images/gallery/landscapes/full/6.jpg',
      title: 'Misty Mountains',
      orientation: 'landscape',
      category: ['Mountains'],
      link: ''
    },
    {
      id: 7,
      image: '/images/gallery/landscapes/thumb/7.jpg',
      full: '/images/gallery/landscapes/full/7.jpg',
      title: 'Vast Shutlins',
      orientation: 'landscape',
      category: ['Mountains'],
      link: ''
    },
    {
      id: 8,
      image: '/images/gallery/landscapes/thumb/8.jpg',
      full: '/images/gallery/landscapes/full/8.jpg',
      title: 'Storm',
      orientation: 'landscape',
      category: ['Open'],
      link: ''
    },
    {
      id: 9,
      image: '/images/gallery/landscapes/thumb/9.jpg',
      full: '/images/gallery/landscapes/full/9.jpg',
      title: 'Forest Sky',
      orientation: 'landscape',
      category: ['Forests'],
      link: ''
    }
  ],
  meta: {
    title: `Landscapes - ${OWNER_NAME} Nature & Landscape Photography`,
    description: pageBody,
    image: `${HTTPS_WWW_MAIN_DOMAIN}/images/backgrounds/og-1.jpg`,
    url: `${HTTPS_WWW_MAIN_DOMAIN}/landscapes`
  }
}
