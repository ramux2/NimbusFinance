import Image from 'next/image'
import chevronsRight from '../../../public/icons/chevrons-right.svg'
import notificationIcon from '../../../public/icons/Notification icon.svg'
import SearchInput from '../SearchInput'
import Link from 'next/link'

export default function Header() {
  let newDate = new Date().toUTCString();
  const extractedDateTime = newDate.slice(5, 16);  
  return (
    <header className="flex justify-between items-center h-20 w-full border-b-2 px-8">
      <div className="flex items-center gap-6">
        <div className="text-2xl text-defaultBlackFont font-bold">Hello Vinicius</div>
        <Image src={chevronsRight} alt="chevronsRight-icon" quality={100} />
        <p className="text-sm text-grayZeroThree">{extractedDateTime}</p>
      </div>  
      <div className="flex items-center gap-12">
        <Image src={notificationIcon} alt="notification-icon" quality={100} />
        <SearchInput placeholder="Search Here" type="text" />
      </div>
    </header>
  )
}
