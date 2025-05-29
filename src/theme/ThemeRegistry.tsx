'use client'

import { ReactNode } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { Poppins, Philosopher } from 'next/font/google'
import { GREEN, WHITE } from '@/shared/consts/colours'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    xxl: true
  }
}

const poppins = Poppins({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin']
})
const philosopher = Philosopher({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin']
})

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2560
    }
  },
  typography: {
    allVariants: {
      color: GREEN,
      fontFamily: poppins.style.fontFamily
    },
    h1: {
      fontFamily: philosopher.style.fontFamily,
      textShadow: '2px 2px 3px rgba(33,33,33,.5)',
      color: WHITE,
      fontSize: '2.5rem',
      marginBottom: '1em',
      textAlign: 'center'
    },
    h2: {
      marginBottom: '1em',
      fontSize: '1.5em'
    },
    body1: {
      fontFamily: poppins.style.fontFamily,
      color: WHITE
    }
  },
  palette: {
    primary: {
      main: WHITE
    },
    secondary: {
      main: GREEN
    }
  }
})
export default function ThemeRegistry({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            body: {
              margin: 0,
              width: '100%',
              height: '100%'
            },
            main: {
              height: 'calc(100% - 155px)',
              overflowX: 'auto'
            },
            '.main-para': {
              height: 'calc(100% - 155px)!important'
            },
            a: {
              fontFamily: poppins.style.fontFamily,
              color: GREEN
            },
            '.arrow': {
              position: 'absolute',
              top: '75%',
              left: '50%',
              transform: ['translate(-50%, -50%)', 'rotate(-90deg)']
            },
            '.arrow span': {
              display: 'block',
              width: '3vw',
              height: '3vw',
              borderBottom: '5px solid white',
              borderRight: '5px solid white',
              transform: 'rotate(45deg)',
              margin: '-10px',
              animation: 'animate 2s infinite'
            },
            '.arrow span:nth-child(2)': { animationDelay: '-0.2s' },
            '.arrow span:nth-child(3)': { animationDelay: '-0.4s' },
            '@keyframes animate': {
              '0%': {
                opacity: 0,
                transform: 'rotate(45deg) translate(-20px, -20px)'
              },
              '50%': { opacity: 1 },
              '100%': {
                opacity: 0,
                transform: 'rotate(45deg) translate(20px, 20px)'
              }
            }
          }}
        />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
