'use client'

import { Link } from '@mui/material'
import { pageType } from '@/shared/types'
import { navigationStyle } from '../style'
import NextLink from 'next/link'

interface NavLinkTypes {
  page: pageType
  current: boolean
  isMobile: boolean
  onClick?: () => void
}
export const NavLink = ({
  page,
  current,
  isMobile,
  onClick
}: Readonly<NavLinkTypes>) => {
  const linkSX = isMobile ? {} : navigationStyle.link
  return (
    <Link
      onClick={onClick}
      component={NextLink}
      href={page.link}
      color={'secondary'}
      variant="body1"
      key={page.title + '-md-link'}
      sx={{
        ...linkSX,
        ...(current ? { textDecoration: 'underline' } : undefined),
        fontWeight: '600'
      }}
    >
      {page.title}
    </Link>
  )
}
