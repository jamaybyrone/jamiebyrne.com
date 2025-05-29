import { GREEN, GREEN_HOVER } from '@/shared/consts/colours'

export const skipStyle = {
  default: {
    background: GREEN,
    '&:hover': {
      background: GREEN_HOVER
    }
  },
  focused: {
    overflow: 'hidden',
    zIndex: -999,
    position: 'absolute',
    minWidth: 0,
    minHeight: 0,
    width: 0,
    height: 0,
    padding: 0,
    margin: 0
  }
}
