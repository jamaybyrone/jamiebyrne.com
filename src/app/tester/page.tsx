import { Viewport } from 'next'
import meta from '@/lib/meta'
import { data } from './data'
import { viewPort } from '@/shared/consts/meta'

import { Layout } from '@/layouts/tester'

export const viewport: Viewport = viewPort
export const metadata = meta(data.meta, {
  index: false,
  follow: false,
  nocache: false,
  googleBot: {
    index: false,
    follow: false,
    noimageindex: false,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1
  }
})

export default async function Me() {
  return <Layout />
}
