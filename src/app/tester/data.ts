import { defaultDataType } from '@/shared/types'
import { OWNER_NAME } from '@/shared/consts/html'
import { HTTPS_WWW_MAIN_DOMAIN } from '@/shared/consts/url'

export const data: defaultDataType = {
  meta: {
    title: `tester - ${OWNER_NAME} Nature & Landscape Photography`,
    description:
      'tester ' +
      OWNER_NAME +
      ' Macclesfield based photographer, nature photography, pet photography, landscape photography',
    image: `${HTTPS_WWW_MAIN_DOMAIN}/images/rex/FB_IMG_1555168401933.jpg`,
    url: HTTPS_WWW_MAIN_DOMAIN
  }
}
