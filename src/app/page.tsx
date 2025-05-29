import { Viewport } from 'next'
import meta from '@/lib/meta'
import { data } from './data'
import { viewPort } from '@/shared/consts/meta'
import { Layout } from '@/layouts/home'

export const viewport: Viewport = viewPort
export const metadata = meta(data.meta)

export default async function Home() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href={'/images/2_new.webp'}
        type="image/webp"
      />
      <Layout />
    </>
  )
}
