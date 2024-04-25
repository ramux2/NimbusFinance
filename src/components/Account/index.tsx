'use client'

import Link from 'next/link'

interface AccountProps {
  accountName: string
}

export function Account(props: AccountProps) {
  return (
    <div className="p-4">
      <h1 className='text-base text-defaultBlackFont'>{ props.accountName }</h1>
      <div>
        <div className="flex justify-between">
            <p className="text-xs text-defaultBlackFont">Current Balance</p>
            <p className="text-xs">R$ 1.470</p>
        </div>
        <div className="flex justify-between">
            <p  className="text-xs text-defaultBlackFont">Incomes</p>
            <p className="text-xs text-specialGreen">R$ 6.000</p>
        </div>
        <div className="flex justify-between">
            <p  className="text-xs text-defaultBlackFont">Outcomes</p>
            <p className="text-xs text-specialRed">R$ 4.530</p>
        </div>
      </div>
    </div>
  )
}