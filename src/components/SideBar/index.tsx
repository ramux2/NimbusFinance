import Image from 'next/image'
import { SideBarButton } from '../SideBarButton'
import overviewIcon from '../../../public/icons/Overview.svg'
import balancesIcon from '../../../public/icons/wallet.svg'
import transactionsIcon from '../../../public/icons/Transaction.svg'
import billsIcon from '../../../public/icons/Bill.svg'
import expensesIcon from '../../../public/icons/Expencces.svg'
import settingsIcon from '../../../public/icons/Settings.svg'
import goalsIcon from '../../../public/icons/Goal.svg'
import nimbusIconWhite from '../../../public/icons/nimbus-icon-white20.svg'


export default function SideMenu() {
  return (
    <aside className="min-w-72 relative left-0 top-0 h-screen flex flex-col items-center bg-defaultBlack">
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
        <SideBarButton
          href="/balances"
          name="Balances"
          icon={balancesIcon}
          alt="balances-icon" 
        />
        <SideBarButton
          href="/transactions"
          name="Transactions"
          icon={transactionsIcon}
          alt="transactions-icon"
        />
        <SideBarButton
          href='/bills'
          name='Bills'
          icon={billsIcon}
          alt='bills-icon'
        />
        <SideBarButton
          href='/expenses'
          name='Expenses'
          icon={expensesIcon}
          alt='expenses-icon'
        />
        <SideBarButton
          href='/goals'
          name='Goals'
          icon={goalsIcon}
          alt='goal-icon'
        />
        <SideBarButton
          href='/settings'
          name='Settings'
          icon={settingsIcon}
          alt='settings-icon'
        />
      </ul>
    </aside>
  )
}