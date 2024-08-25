import Image from 'next/image'
import clsx from 'clsx'
import screenshot from '@/images/788shots_so.png'  

export function PhoneFrame({
  className,
  children,
  priority = false,
  ...props
}) {
  return (
    <div className={clsx('relative aspect-[800/800]', className)} {...props}>
      <Image
        src={screenshot}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full"
        unoptimized
        priority={priority}
      />
    </div>
  )
}
