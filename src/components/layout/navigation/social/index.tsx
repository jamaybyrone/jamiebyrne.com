import Link from 'next/link'
import { GIT_HUB_URL } from '@/shared/consts/url'
import GitHubIcon from '@mui/icons-material/GitHub'
import ArticleIcon from '@mui/icons-material/Article'
import Paper from '@mui/material/Paper'
import React from 'react'

export const Social = () => {
  return (
    <Paper elevation={0} sx={{ textAlign: 'center', mt: 2 }}>
      <Link
        href={GIT_HUB_URL}
        target={'_blank'}
        style={{ margin: '5px' }}
        aria-label="GitHub"
      >
        <GitHubIcon />
      </Link>
      {/*<Link*/}
      {/*  href={LINKEDIN_URL}*/}
      {/*  target={'_blank'}*/}
      {/*  style={{ margin: '5px' }}*/}
      {/*  aria-label="LinkedIn"*/}
      {/*>*/}
      {/*  <LinkedInIcon />*/}
      {/*</Link>*/}
      <Link
        href={'/api/cv'}
        target={'_blank'}
        style={{ margin: '5px' }}
        aria-label="CV Download"
      >
        <ArticleIcon />
      </Link>
    </Paper>
  )
}
