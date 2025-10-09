// import { CookieBar } from '@/components/layout/cookie-bar'
import ThemeRegistry from '@/theme/ThemeRegistry'
import Navigation from '@/components/layout/navigation'
// import { GoogleAnalytics } from '@next/third-parties/google'
import { ReactNode } from 'react'
import { mainContent } from '@/shared/consts/html'

import { Metadata } from 'next'
import { HTTPS_WWW_MAIN_DOMAIN } from '@/shared/consts/url'
import { RichBreadCrumbs } from 'react-schema-markup'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL(HTTPS_WWW_MAIN_DOMAIN),
  alternates: {
    canonical: './'
  }
}

export default async function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  const { NEXT_PUBLIC_LOCALE } = process.env

  return (
    <ThemeRegistry>
      <html lang={NEXT_PUBLIC_LOCALE} style={{ height: '100%' }}>
      <Script src={'https://web.dev.hdruk.cloud/api/test'}/>
        <body>
          <Navigation />
          <main id={mainContent} tabIndex={0}>
            {children}
          </main>
          {/*<CookieBar />*/}
          {/*<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />*/}
          <RichBreadCrumbs ScriptWrap={Script} />
        </body>
      </html>
    </ThemeRegistry>
  )
}
