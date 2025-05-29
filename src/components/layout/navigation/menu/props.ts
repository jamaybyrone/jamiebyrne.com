import { pageType } from '@/shared/types'
import React from 'react'

export type menuProps = {
  page: pageType
  handleGalleryClick: (param: React.MouseEvent<HTMLElement>) => void
  handleCloseNavMenu?: () => void
  current: boolean
  isMobile: boolean
}
