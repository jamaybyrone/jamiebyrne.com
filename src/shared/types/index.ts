import { metaProps } from '@/lib/meta'

export type defaultDataType = Pick<galleryDataType, 'meta'>

export interface galleryDataType {
  pageImage: string
  pageTitle: string
  pageBody: string
  pageImages: imageType[]
  meta: metaProps
}

export interface imageType {
  id: number
  image: string
  full: string
  title: string
  orientation: string
  category: string[]
  link: string
}

export interface pageType {
  title: string
  link: string
}
