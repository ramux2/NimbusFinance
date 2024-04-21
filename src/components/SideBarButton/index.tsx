'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface SideBarButtonProps {
  href: string
  icon: StaticImageData
  name: string
  alt: string
}

export function SideBarButton(props: SideBarButtonProps) {
  const pathName = usePathname()
  const [isActive, setIsActive] = useState(pathName == props.href)

  // useEffect(() => {
  //     const handleRouteChange = () => setIsActive(pathName === props.href)
  //     return () => router.events.off('routeChangeComplete', handleRouteChange)
  // }, [pathName, props.href])

  const handleClick = () => {}

  const iconStyle = {
    filter: isActive ? 'brightness(0) invert(1)' : 'none',
  }

  return (
    <Link href={props.href} className="cursor-pointer" onClick={handleClick}>
      <div
        className={`flex w-56 p-4 rounded gap-3 ${
          !isActive
            ? 'bg-transparent font-normal text-whiteFont text-base opacity-70 hover:bg-white/[.08]'
            : 'bg-primaryColor text-white'
        }  transition-all font-semibold`}
      >
        <Image
          src={props.icon}
          alt={props.alt}
          quality={100}
          style={iconStyle}
        />
        {props.name}
      </div>
    </Link>
  )
}

export default SideBarButton