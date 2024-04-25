'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import gameIcon from "../../../public/icons/gameIcon.svg"
import ListItem from '../ListItem'

interface CardListProps {
  href: string
  icon: StaticImageData
  name: string
  value: string
  alt: string
}

export function CardList(props: CardListProps) {
  return (
    <div className="w-80 ml-6 mt-14">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Revenue</h2>
        <a href="#" className="text-blue-500">View All</a>
      </div>
      <div className="bg-white rounded-lg">  
        <ListItem
          icon={ gameIcon }
          description="GTR 5"
          category="Gadget & Get"
          value="160.00"
          alt="gameicon"
        />
        <ListItem
          icon={ gameIcon }
          description="GTR 5"
          category="Gadget & Get"
          value="160.00"
          alt="gameicon"
        />
        <ListItem
          icon={ gameIcon }
          description="GTR 5"
          category="Gadget & Get"
          value="160.00"
          alt="gameicon"
        />
        <ListItem
          icon={ gameIcon }
          description="GTR 5"
          category="Gadget & Get"
          value="160.00"
          alt="gameicon"
        />
        <ListItem
          icon={ gameIcon }
          description="GTR 5"
          category="Gadget & Get"
          value="160.00"
          alt="gameicon"
        />
      </div>
    </div>
  )
}