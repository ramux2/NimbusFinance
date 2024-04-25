'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { Account } from '../Account'

// interface AccountDisplayProps {
//   href: string
//   icon: StaticImageData
//   name: string
//   alt: string
// }

export function AccountDisplay() {
  return (
    <div className="mt-14 ml-16">
      <h1 className="text-grayZeroTwo text-2xl">Accounts</h1>
      <div className="w-96 rounded-lg shadow-md">
        <Account 
          accountName="Bradesco"
        />
        <Account 
          accountName="XP Inc"
        />
        <Account 
          accountName="Sicredi"
        />
      </div>
    </div>
  )
}