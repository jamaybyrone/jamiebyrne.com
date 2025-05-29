import {
  GREEN,
  GREEN_DISABLED,
  GREEN_HOVER,
  WHITE
} from '@/shared/consts/colours'

export const listSX = {
  color: GREEN,
  listStyleType: 'disc',
  pl: 2,
  mb: 2,
  '& .MuiListItem-root': { display: 'list-item' }
}

export const buttonSX = {
  background: GREEN,
  color: WHITE,
  fontSize: '14px',
  fontWight: 500,
  textAlign: 'center',
  transition: '.3s',
  letterSpacing: '2px',
  borderRadius: 0,
  textTransform: 'capitalize',
  textDecoration: 'none',
  margin: '1em',
  padding: '19px 50px',
  '&:disabled': {
    background: GREEN_DISABLED
  },
  '&:hover': {
    background: GREEN_HOVER
  }
}
