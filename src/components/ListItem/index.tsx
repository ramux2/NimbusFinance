'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

interface ListItemProps {
  icon: StaticImageData
  description: string
  category: string
  value: string
  alt: string
}

export default function ListItem(props: ListItemProps ) {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex justify-between items-center border-b py-2">
              <div className="flex items-center">
                <Image src={props.icon} alt="" width={50} height={50} className="rounded-full" />
                <div className="ml-4">
                  <h3 className="text-sm font-medium">{props.description}</h3>
                  <p className="text-xs text-gray-500">{props.category}</p>
                </div>
              </div>
              <p className="text-sm font-medium">{props.value}</p>
            </div>
        </div>
    )
  }