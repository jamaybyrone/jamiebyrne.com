import { WHITE } from '@/shared/consts/colours'

export const galleryStyle = {
  imageBox: {
    author: { color: WHITE, padding: '.5em', paddingTop: '0' },
    body: {
      color: WHITE,
      padding: '.5em',
      paddingTop: '0',
      paddingBottom: '0'
    },
    image: {
      width: 'auto',
      height: 'auto',
      maxHeight: '75vh',
      maxWidth: '100%'
    }
  },
  items: {
    closeIcon: { color: WHITE, fontSize: '2em' },
    arrowIcon: { color: WHITE, fontSize: '4em' },
    arrow: {
      position: 'absolute',
      top: '50%',
      width: '4em',
      height: '4em',
      zIndex: '3',
      filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))'
    },
    containerBox: {
      background: 'rgb(0 0 0 / 85%)',
      zIndex: '2',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: 'center'
    },
    box: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }
}
