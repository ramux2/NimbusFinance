'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

interface AccountProps {
  href: string
  icon: StaticImageData
  name: string
  alt: string
}

export function AccountDisplay(props: AccountProps) {
  return (
    <></>
  )
}