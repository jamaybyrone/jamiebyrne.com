import { Box, Container, IconButton, IconButtonPropsSizeOverrides, Modal } from '@mui/material'
import Image from 'next/image'
import { imageType } from '@/shared/types'
import { galleryStyle } from '@/components/gallery/style'

import CloseIcon from '@mui/icons-material/Close'
import { styles } from '@/components/gallery/lightbox/style'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { ImageBox } from '@/components/gallery/lightbox/ImageBox'
import useIsMobile from '@/hooks/useIsMobile'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { OverridableStringUnion } from '@mui/types'

interface ImageDialogProps {
  open: boolean
  image: imageType
  position: number
  totalImages: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void

}

export function ImageDialog({
  open,
  image,
  position,
  totalImages,
  onClose,
  onPrev,
  onNext

}: Readonly<ImageDialogProps>) {
  const theme = useTheme()
  const matchesSM = useIsMobile()
  const matchesLGUP = useMediaQuery(theme.breakpoints.up('lg'))

  const size: OverridableStringUnion<'small' | 'medium' | 'large', IconButtonPropsSizeOverrides> = matchesSM ? 'small' : 'large'
  const itemStyle = styles(matchesSM)

  return (
    <Modal open={open} onClose={onClose} aria-label="Enlarged image">
      <Container maxWidth={false}>
        <>
          {position > 0 && matchesLGUP && (
            <IconButton
              aria-label="Left"
              size={size}
              onClick={(e) => {
                e.stopPropagation()
                onPrev()
              }}
              sx={itemStyle.leftArrowSX}
            >
              <ArrowLeftIcon
                fontSize="inherit"
                sx={galleryStyle.items.arrowIcon}
              />
            </IconButton>
          )}
        </>
        <Box sx={itemStyle.boxSX}>
          <IconButton
            aria-label="Close"
            size="small"
            onClick={onClose}
            sx={itemStyle.iconButtonSX}
          >
            <CloseIcon fontSize="inherit" sx={galleryStyle.items.closeIcon} />
          </IconButton>

          <ImageBox
            title={image.title}
            position={position}
            totalImages={totalImages}
          >
            <Image
              src={image.full}
              width={0}
              height={0}
              alt={'Zoomed ' + image.title}
              loading="eager"
              quality={100}
              style={{
                ...galleryStyle.imageBox.image
              }}
              priority={true}
            />
          </ImageBox>
        </Box>
        <>
          {position < totalImages - 1 && matchesLGUP && (
            <IconButton
              aria-label="Right"
              size={size}
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              sx={itemStyle.rightArrowSX}
            >
              <ArrowRightIcon
                fontSize="inherit"
                sx={galleryStyle.items.arrowIcon}
              />
            </IconButton>
          )}
        </>
      </Container>
    </Modal>
  )
}
