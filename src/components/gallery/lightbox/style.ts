import { galleryStyle } from '@/components/gallery/style'

export const styles = (matchesSM: boolean) => {
  return {
    boxSX: {
      ...galleryStyle.items.box,
      ...(matchesSM && { width: '100%' })
    },
    rightArrowSX: {
      ...galleryStyle.items.arrow,
      ...(matchesSM && { width: '1em', height: '1em' }),
      ...(matchesSM && { top: 'calc(50% - 1em)' }),
      right: '1em'
    },
    leftArrowSX: {
      ...galleryStyle.items.arrow,
      ...(matchesSM && { width: '1em', height: '1em' }),
      ...(matchesSM && { top: 'calc(50% - 1em)' })
    },
    iconButtonSX: {
      ...(!matchesSM && {
        position: 'absolute',
        right: '-3em',
        top: '-3em'
      }),
      ...(matchesSM && { float: 'right' })
    }
  }
}
