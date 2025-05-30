import { galleryDataType } from '@/shared/types'
import { OWNER_NAME } from '@/shared/consts/html'
import { HTTPS_WWW_MAIN_DOMAIN } from '@/shared/consts/url'

const pageBody: string =
  'There is nothing more beautiful than the night sky and when you\'re out in the peak district hills you can get some pretty spectacular glimpses of the great beyond. On more than one occasion I have set off on a moonless night out into the bleak, cold and dark to capture some beauty in the peaks.'

export const data: galleryDataType = {
  pageImage: '/home-3.avif',
  pageTitle: 'Wildlife Photography',
  pageBody: pageBody,
  pageImages: [
    {
      id: 1,
      image: '/images/gallery/wildlife/thumb/1.jpg',
      full: '/images/gallery/wildlife/full/1.jpg',
      title: 'Maggie &amp; Staggie',
      orientation: 'landscape',
      category: ['Stags'],
      link: ''
    },
    {
      id: 2,
      image: '/images/gallery/wildlife/thumb/2.jpg',
      full: '/images/gallery/wildlife/full/2.jpg',
      title: 'Sisken',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 3,
      image: '/images/gallery/wildlife/thumb/3.jpg',
      full: '/images/gallery/wildlife/full/3.jpg',
      title: 'Chaffince',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 4,
      image: '/images/gallery/wildlife/thumb/4.jpg',
      full: '/images/gallery/wildlife/full/4.jpg',
      title: 'Wild Pony',
      orientation: 'landscape',
      category: ['Pony'],
      link: ''
    },
    {
      id: 5,
      image: '/images/gallery/wildlife/thumb/5.jpg',
      full: '/images/gallery/wildlife/full/5.jpg',
      title: 'Red Kite',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 6,
      image: '/images/gallery/wildlife/thumb/6.jpg',
      full: '/images/gallery/wildlife/full/6.jpg',
      title: 'Rabbit',
      orientation: 'landscape',
      category: ['Rabbits'],
      link: ''
    },
    {
      id: 7,
      image: '/images/gallery/wildlife/thumb/7.jpg',
      full: '/images/gallery/wildlife/full/7.jpg',
      title: 'Grey Wagtail',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    // {
    //     id:8,
    //     image:'/images/gallery/mawildlifecro/thumb/8.jpg',
    //     full:'/images/gallery/wildlife/full/8.jpg',
    //     title:'Mining Stars',
    //     orientation: 'landscape',
    //     category:'Flowers',

    // },
    {
      id: 9,
      image: '/images/gallery/wildlife/thumb/9.jpg',
      full: '/images/gallery/wildlife/full/9.jpg',
      title: 'Fox',
      orientation: 'landscape',
      category: ['Fox'],
      link: ''
    },
    {
      id: 10,
      image: '/images/gallery/wildlife/thumb/10.jpg',
      full: '/images/gallery/wildlife/full/10.jpg',
      title: 'Goslings',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 11,
      image: '/images/gallery/wildlife/thumb/11.jpg',
      full: '/images/gallery/wildlife/full/11.jpg',
      title: 'Signets',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 12,
      image: '/images/gallery/wildlife/thumb/12.jpg',
      full: '/images/gallery/wildlife/full/12.jpg',
      title: 'Duckling',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 13,
      image: '/images/gallery/wildlife/thumb/13.jpg',
      full: '/images/gallery/wildlife/full/13.jpg',
      title: 'Signets first swim',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 14,
      image: '/images/gallery/wildlife/thumb/14.jpg',
      full: '/images/gallery/wildlife/full/14.jpg',
      title: 'Signet',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 15,
      image: '/images/gallery/wildlife/thumb/15.jpg',
      full: '/images/gallery/wildlife/full/15.jpg',
      title: 'Common Buzzard &amp; Jackdaw',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 16,
      image: '/images/gallery/wildlife/thumb/16.jpg',
      full: '/images/gallery/wildlife/full/16.jpg',
      title: 'Gosling',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 17,
      image: '/images/gallery/wildlife/thumb/17.jpg',
      full: '/images/gallery/wildlife/full/17.jpg',
      title: 'Black-headed gull',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 18,
      image: '/images/gallery/wildlife/thumb/18.jpg',
      full: '/images/gallery/wildlife/full/18.jpg',
      title: 'Male Stonechat',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 19,
      image: '/images/gallery/wildlife/thumb/19.jpg',
      full: '/images/gallery/wildlife/full/19.jpg',
      title: 'Female Stonechat',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 20,
      image: '/images/gallery/wildlife/thumb/20.jpg',
      full: '/images/gallery/wildlife/full/20.jpg',
      title: 'Fallow Deer close up',
      orientation: 'landscape',
      category: ['Deer'],
      link: ''
    },
    {
      id: 21,
      image: '/images/gallery/wildlife/thumb/21.jpg',
      full: '/images/gallery/wildlife/full/21.jpg',
      title: 'Fallow Deer',
      orientation: 'landscape',
      category: ['Deer'],
      link: ''
    },
    {
      id: 22,
      image: '/images/gallery/wildlife/thumb/22.jpg',
      full: '/images/gallery/wildlife/full/22.jpg',
      title: 'Common Ringed Plover',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 23,
      image: '/images/gallery/wildlife/thumb/23.jpg',
      full: '/images/gallery/wildlife/full/23.jpg',
      title: 'Barn Owl',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 24,
      image: '/images/gallery/wildlife/thumb/24.jpg',
      full: '/images/gallery/wildlife/full/24.jpg',
      title: 'Short-Eared Owl',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 25,
      image: '/images/gallery/wildlife/thumb/25.jpg',
      full: '/images/gallery/wildlife/full/25.jpg',
      title: 'Pheasant',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 26,
      image: '/images/gallery/wildlife/thumb/26.jpg',
      full: '/images/gallery/wildlife/full/26.jpg',
      title: 'Coal Tit',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 27,
      image: '/images/gallery/wildlife/thumb/27.jpg',
      full: '/images/gallery/wildlife/full/27.jpg',
      title: 'Robin',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 28,
      image: '/images/gallery/wildlife/thumb/28.jpg',
      full: '/images/gallery/wildlife/full/28.jpg',
      title: 'Heron',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 29,
      image: '/images/gallery/wildlife/thumb/29.jpg',
      full: '/images/gallery/wildlife/full/29.jpg',
      title: 'Deer',
      orientation: 'landscape',
      category: ['Deer'],
      link: ''
    },
    {
      id: 30,
      image: '/images/gallery/wildlife/thumb/30.jpg',
      full: '/images/gallery/wildlife/full/30.jpg',
      title: 'Treecreeper',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 31,
      image: '/images/gallery/wildlife/thumb/31.jpg',
      full: '/images/gallery/wildlife/full/31.jpg',
      title: 'Sparrow',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 32,
      image: '/images/gallery/wildlife/thumb/32.jpg',
      full: '/images/gallery/wildlife/full/32.jpg',
      title: 'Swan',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 33,
      image: '/images/gallery/wildlife/thumb/33.jpg',
      full: '/images/gallery/wildlife/full/33.jpg',
      title: 'Goldfinch',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    // {
    //     id:34,
    //     image:'/images/gallery/wildlife/thumb/34.jpg',
    //     full:'/images/gallery/wildlife/full/34.jpg',
    //     title:'Dream',
    //     orientation: 'landscape',
    //     category:'Insects',

    // },
    // {
    //     id:35,
    //     image:'/images/gallery/wildlife/thumb/35.jpg',
    //     full:'/images/gallery/wildlife/full/35.jpg',
    //     title:'Mining Stars',
    //     orientation: 'landscape',
    //     category:'Insects',

    // },
    // {
    //     id:36,
    //     image:'/images/gallery/wildlife/thumb/36.jpg',
    //     full:'/images/gallery/wildlife/full/36.jpg',
    //     title:'Dream',
    //     orientation: 'landscape',
    //     category:'Insects',

    // },
    {
      id: 37,
      image: '/images/gallery/wildlife/thumb/37.jpg',
      full: '/images/gallery/wildlife/full/37.jpg',
      title: 'Mallard',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 38,
      image: '/images/gallery/wildlife/thumb/38.jpg',
      full: '/images/gallery/wildlife/full/38.jpg',
      title: 'Grouse',
      orientation: 'landscape',
      category: ['Birds'],
      link: ''
    },
    {
      id: 39,
      image: '/images/gallery/wildlife/thumb/39.jpg',
      full: '/images/gallery/wildlife/full/39.jpg',
      title: 'Mountain Hare',
      orientation: 'landscape',
      category: ['Hares'],
      link: ''
    }
  ],
  meta: {
    title: `Wildlife - ${OWNER_NAME} Nature & Landscape Photography`,
    description:
      'Wildlife &amp; Nature photography is my true passion, observing creatures being their own individual selves and the wildness of nature out in the elements. I dream of one day photographing the Scottish wild cats and pine martens. In particular, small birds are some of my favorite things to photograph.',
    image: `${HTTPS_WWW_MAIN_DOMAIN}/images/backgrounds/og-3.jpg`,
    url: `${HTTPS_WWW_MAIN_DOMAIN}/wildlife`
  }
}
