import logoPng from '@/images/quakesense.png'  
import Image from 'next/image'

export function Logo() {
  return (
    <Image
      src={logoPng}
      alt="QuakeSense Logo"
      className="h-10 w-auto"
      unoptimized
    />
  )
}
