import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const lowerPathName = pathname.toLowerCase()

  if (
    lowerPathName.includes('_next') ||
    lowerPathName.includes('chunks') ||
    lowerPathName.includes('google') ||
    lowerPathName.includes('images')
  ) {
    return NextResponse.next()
  }

  const dirtyBotPaths = [
    '.asp',
    '.php',
    'wp',
    '.env',
    '.well-known',
    '.git',
    '.html',
    'aws',
    'cgi',
    'admin',
    'login',
    'wordpress',
    'backup',
    'bc',
    'bk',
    'old',
    'new'
  ]

  if (dirtyBotPaths.some((substring) => lowerPathName.includes(substring))) {
    return NextResponse.redirect(
      // you know the rules, and so do I...
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      301
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*'
}
