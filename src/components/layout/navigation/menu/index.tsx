'use client'

import { Link, MenuItem } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { menuProps } from './props'
import { NavLink } from '@/components/layout/navigation/link'
import { navigationStyle } from '@/components/layout/navigation/style'

const GalleryLink = ({ handleGalleryClick, current, page, isMobile }) => {
  const linkSX = !isMobile
    ? {
        ...navigationStyle.link,
        ...(current ? { textDecoration: 'underline' } : undefined),
        fontWeight: '600'
      }
    : {
        textDecoration: current ? 'underline' : 'none',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center'
      }
  const arrowSX = isMobile
    ? { fontSize: '1rem', ml: 0.5 }
    : navigationStyle.dropDownIcon
  return (
    <Link
      component="button"
      aria-label="Open gallery menu"
      aria-controls="gallery-menu"
      aria-haspopup="true"
      onClick={handleGalleryClick}
      color="secondary"
      variant="body1"
      sx={linkSX}
    >
      {page.title} <ArrowDropDownIcon sx={arrowSX} key="gallery-md-dropdown" />
    </Link>
  )
}

const MenuLink = ({
  page,
  isGallery,
  handleCloseNavMenu,
  handleGalleryClick,
  isMobile,
  current
}) => {
  return isGallery ? (
    <GalleryLink
      handleGalleryClick={handleGalleryClick}
      current={current}
      page={page}
      isMobile={isMobile}
    />
  ) : (
    <NavLink
      page={page}
      current={current}
      isMobile={isMobile}
      onClick={isGallery || isMobile ? handleCloseNavMenu : undefined}
    />
  )
}
function MenuListItem({
  page,
  handleGalleryClick,
  current,
  isMobile,
  handleCloseNavMenu
}: Readonly<menuProps>) {
  const isGallery = page.title === 'Gallery'
  if (isMobile) {
    return (
      <MenuItem>
        <MenuLink
          page={page}
          current={current}
          isMobile={isMobile}
          isGallery={isGallery}
          handleCloseNavMenu={handleCloseNavMenu}
          handleGalleryClick={handleGalleryClick}
        />
      </MenuItem>
    )
  }
  return (
    <MenuLink
      page={page}
      current={current}
      isMobile={isMobile}
      isGallery={isGallery}
      handleCloseNavMenu={handleCloseNavMenu}
      handleGalleryClick={handleGalleryClick}
    />
  )
}

export default MenuListItem
