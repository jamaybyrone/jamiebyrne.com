import { Viewport } from 'next/types'
import { data } from './data'
import meta from '@/lib/meta'
import { viewPort } from '@/shared/consts/meta'
import Layout from '@/layouts/gallery-page'

export const viewport: Viewport = viewPort
export const metadata = meta(data.meta)

export default function Landscapes() {
  return (
    <Layout
      image={data.pageImage}
      title={data.pageTitle}
      body={data.pageBody}
      data={data.pageImages}
    />
  )
}
