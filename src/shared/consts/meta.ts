import { Robots } from 'next/dist/lib/metadata/types/metadata-types'
import { Viewport } from 'next/types'
import { GREEN } from './colours'
import { OWNER_NAME } from '@/shared/consts/html'
export const viewPort: Viewport = {
  themeColor: GREEN
}
export const SITE_NAME: string = OWNER_NAME + ' Nature & Landscape Photography'
export const robots: Robots = {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1
  }
}
