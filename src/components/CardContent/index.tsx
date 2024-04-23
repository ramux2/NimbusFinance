'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

interface CardContentProps {
  href: string
  icon: StaticImageData
  name: string
  value: string
  alt: string
}

export function CardContent(props: CardContentProps) {
  return (
    <Link href={props.href}>
      <div className="flex justify-center">
        <div className="w-80 max-h-32 text-grayZeroTwo text-xl mt-14">
          {props.name}
          <div className="flex flex-row items-center justify-center gap-32 shadow-md rounded-lg h-20 w-full text-defaultBlackFont font-extrabold">
            R$ { props.value }            
            <Image
            src={props.icon}
            alt={props.alt}
            quality={100}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}