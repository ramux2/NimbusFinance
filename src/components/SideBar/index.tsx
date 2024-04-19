import Image from 'next/image'
import { SideBarButton } from '../SideBarButton'
import overviewIcon from '../../../public/icons/Overview.svg'
import nimbusIconWhite from '../../../public/icons/nimbus-icon-white20.svg'


export default function SideMenu() {
  return (
    <aside className="w-72 fixed left-0 top-0 h-screen flex flex-col items-center bg-defaultBlack">
      <div className="flex items center mt-12 gap-6 max-w-56">
        <Image src={nimbusIconWhite} alt="nimbus-icon" quality={100} />
        <h1 className='text-whiteFont text-xl font-bold'>Nimbus Finance</h1>
      </div>
      <ul className="flex flex-col gap-4 mt-10">
        <SideBarButton
          href="/overview"
          name="Overview"
          icon={overviewIcon}
          alt="dashboard-icon"
        />
      </ul>
    </aside>
  )
}