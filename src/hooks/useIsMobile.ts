import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
export default function useIsMobile(): boolean {
  return useMediaQuery(useTheme().breakpoints.down('sm'))
}
