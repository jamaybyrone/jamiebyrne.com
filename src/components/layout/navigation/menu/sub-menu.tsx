'use client'

import { pageType } from '@/shared/types'
import { Menu, MenuItem } from '@mui/material'
import NextLink from 'next/link'

interface SubMenuProps {
  galleryPages: pageType[]
  anchorElGalleryMenu: HTMLElement | null
  handleClose: () => void
}

function SubMenu({
  galleryPages,
  anchorElGalleryMenu,
  handleClose
}: Readonly<SubMenuProps>) {
  const isMenuOpen = Boolean(anchorElGalleryMenu)

  return (
    <Menu
      id="gallery-menu"
      anchorEl={anchorElGalleryMenu}
      open={isMenuOpen}
      onClose={handleClose}
      disableScrollLock={true}
    >
      {galleryPages.map((page) => (
        <MenuItem
          key={page.title}
          component={NextLink}
          href={page.link}
          onClick={handleClose}
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            padding: '.5em',
            fontWeight: 600,
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          {page.title}
        </MenuItem>
      ))}
    </Menu>
  )
}

export default SubMenu
