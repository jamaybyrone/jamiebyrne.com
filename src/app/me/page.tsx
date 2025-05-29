import { Viewport } from 'next'
import meta from '@/lib/meta'
import { data } from './data'
import { viewPort } from '@/shared/consts/meta'

import { Layout } from '@/layouts/me'

export const viewport: Viewport = viewPort
export const metadata = meta(data.meta)

export default async function Me() {
  return <Layout />
}
