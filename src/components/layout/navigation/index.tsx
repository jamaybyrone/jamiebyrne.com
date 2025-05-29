import React from 'react'
import AppBar from '@mui/material/AppBar'

import Toolbar from '@mui/material/Toolbar'

import Container from '@mui/material/Container'
import Skip from './skip'
import { navigationStyle } from './style'
import { GREEN } from '@/shared/consts/colours'

import Paper from '@mui/material/Paper'

import Box from '@mui/material/Box'
import Logo from '@/components/layout/navigation/logo'
import { ClientBar } from '@/components/layout/navigation/client-bar'
import { Social } from '@/components/layout/navigation/social'
function Navigation() {
  return (
    <AppBar
      position="static"
      sx={{
        ...navigationStyle.appBar,
        borderBottom: `3px solid ${GREEN}`,
        background: 'transparent',
        justifyContent: 'center',
        height: '155px'
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Paper sx={{ ...navigationStyle.logoLink }} elevation={0}>
              <Logo />
            </Paper>
            <Skip />
            <Social />
          </Box>

          <Box sx={navigationStyle.wrapper}>
            <ClientBar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation
