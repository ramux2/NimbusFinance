import Image from 'next/image'
import searchIcon from '../../../public/icons/Search.svg'

interface SearchInputProps {
  placeholder: string
  type: string
}

export default function SearchInput(props: SearchInputProps) {
  return (
    <div className="flex w-80 max-w-3xl h-12 pr-3 pl-8 rounded-lg bg-zinc-100 shadow-xl">
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="w-full bg-zinc-100 outline-none"
      />
      <Image src={searchIcon} alt="search-icon" quality={100} />
    </div>
  )
}
