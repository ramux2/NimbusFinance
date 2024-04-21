import Image from 'next/image'
import logo from '../../../public/icons/nimbus-icon-black60.svg'
import notificationIcon from '../../../public/icons/Notification icon.svg'
import SearchInput from '../SearchInput'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-center justify-between h-20 bg-white px-6">
      <Image src={logo} alt="logo-healphy" quality={100} />
        <div className="mr-5 w-6 h-6">
          <Image src={notificationIcon} alt="notification-icon" quality={100} />
        </div>
      <SearchInput placeholder="Buscar" type="text" />
      <div className="flex items-center ml-6">
        {/* <Link href="/meu-perfil">
          <RoleProfile
            alt="profile-icon"
            src="https://github.com/bonatoneto.png"
            name="Neto Bonato"
            role="Dr. Urologista"
          />
        </Link> */}
      </div>
    </header>
  )
}
