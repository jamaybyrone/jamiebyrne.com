import { SITE_NAME } from '@/shared/consts/meta'
import { defaultDataType } from '@/shared/types'
import { OWNER_NAME } from '@/shared/consts/html'
import { HTTPS_WWW_MAIN_DOMAIN } from '@/shared/consts/url'

export const data: defaultDataType = {
  meta: {
    title: `404 - ${SITE_NAME}`,
    description:
      OWNER_NAME +
      ' Macclesfield based photographer, nature photography, pet photography, landscape photography',
    image: `${HTTPS_WWW_MAIN_DOMAIN}/images/backgrounds/og-1.jpg`,
    url: `${HTTPS_WWW_MAIN_DOMAIN}/about-me`
  }
}
