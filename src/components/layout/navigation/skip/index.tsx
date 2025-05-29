'use client'

import { Button } from '@mui/material'
import { useState } from 'react'
import { mainContent } from '@/shared/consts/html'
import { GREEN, GREEN_HOVER } from '@/shared/consts/colours'
const skipStyle = {
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
export default function Skip() {
  const [isButtonFocused, setIsButtonFocused] = useState<boolean>(false)
  const scroll = () => {
    const section: HTMLBodyElement = document.querySelector('#' + mainContent)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    section.tabIndex = -1
    section.focus()
    setTimeout(() => section.removeAttribute('tabindex'), 1000)
  }

  const AccessibilityButtonStyle = {
    ...(!isButtonFocused && skipStyle.focused),
    ...skipStyle.default
  }
  return (
    <Button
      sx={AccessibilityButtonStyle}
      onBlur={() => setIsButtonFocused(false)}
      onFocus={() => setIsButtonFocused(true)}
      onClick={scroll}
    >
      Skip To main
    </Button>
  )
}
