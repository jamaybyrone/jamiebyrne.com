import Image from 'next/image'
import Link from 'next/link'
import { OWNER_NAME } from '@/shared/consts/html'
function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/logo.svg"
        alt={OWNER_NAME}
        width="114"
        height="70"
        priority={true}
      />
    </Link>
  )
}

export default Logo
