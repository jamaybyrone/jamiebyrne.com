'use client'

import Box from '@mui/material/Box'
import { navigationStyle } from '@/components/layout/navigation/style'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import { defaultPages, galleryPages } from '@/components/layout/navigation/data'
import Logo from '@/components/layout/navigation/logo'
import SubMenu from '@/components/layout/navigation/menu/sub-menu'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import MenuListItem from '@/components/layout/navigation/menu'
import { Social } from '@/components/layout/navigation/social'

export const ClientBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElGalleryMenu, setAnchorElGalleryMenu] =
    useState<null | HTMLElement>(null)
  const pathname = usePathname()

  const handleGalleryClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElGalleryMenu(event.currentTarget)
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const isCurrent = (page) => {
    const isHomePage = pathname === '/' && page.title.toLowerCase() === 'home'
    const isCurrentPage = pathname === page.link
    const isGalleryPage =
      galleryPages.some((object) => object.link === pathname) &&
      page.title.toLowerCase() === 'gallery'

    return isHomePage || isCurrentPage || isGalleryPage
  }

  return (
    <>
      <Box sx={navigationStyle.iconBox}>
        <IconButton
          size="large"
          aria-label="Open menu"
          aria-controls="sub-menu"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="sub-menu"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={navigationStyle.menuStyle}
        >
          <nav>
            {defaultPages.map((page) => (
              <MenuListItem
                key={'menu' + page.title}
                page={page}
                current={isCurrent(page)}
                handleCloseNavMenu={handleCloseNavMenu}
                handleGalleryClick={handleGalleryClick}
                isMobile={true}
              />
            ))}
          </nav>
        </Menu>
      </Box>

      <Box sx={navigationStyle.xsLogoBox}>
        <Box>
          <Logo />
          <Social />
        </Box>
      </Box>

      <Box sx={navigationStyle.MDMenuBox} component="nav">
        {defaultPages.map((page) => (
          <MenuListItem
            page={page}
            current={isCurrent(page)}
            key={page.title}
            handleGalleryClick={handleGalleryClick}
            isMobile={false}
          />
        ))}
      </Box>
      <SubMenu
        galleryPages={galleryPages}
        anchorElGalleryMenu={anchorElGalleryMenu}
        handleClose={() => {
          setAnchorElGalleryMenu(null)
          setAnchorElNav(null)
        }}
      />
    </>
  )
}
