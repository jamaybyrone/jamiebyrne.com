'use client'

import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Typography from '@mui/material/Typography'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { cookieBanner } from '@/shared/consts/html'
import { buttonSX } from '@/shared/style'
import Backdrop from '@mui/material/Backdrop'
import { cookieStyle } from '@/components/layout/cookie-bar/style'

export const CookieBar = () => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (!open && Cookies.get(cookieBanner) === undefined) {
      setOpen(true)
    }
  }, [open])

  const setCookie = () => {
    Cookies.set(cookieBanner, '', {
      expires: 365,
      sameSite: 'strict',
      secure: true
    })
    setOpen(false)
  }

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 999999 }}
      open={open}
    >
      <Snackbar
        role="dialog"
        sx={cookieStyle.snackBar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        message={
          <Typography role="status" aria-live="polite">
            There be some cookies for Google Analytics.
          </Typography>
        }
        action={
          <Button
            sx={buttonSX}
            color="secondary"
            size="small"
            onClick={setCookie}
            aria-label="Accept cookies"
          >
            Okay
          </Button>
        }
      />
    </Backdrop>
  )
}
