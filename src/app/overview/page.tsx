import { CardContent } from "@/components/CardContent";
import walletIcon from "../../../public/icons/walletBlue.svg"
import outcomeArrow from "../../../public/icons/outcomeArrow.svg"
import incomeArrow from "../../../public/icons/Up arrow.svg"
import { CardList } from "@/components/CardList";
import { AccountDisplay } from "@/components/AccountDisplay";

export default function OverviewPage() {
    return (
        <main>
          <div className="flex flex-row justify-center gap-6">
            <CardContent
                href="/transactions"
                icon={walletIcon}
                name="Current Balance"
                value="4470"
                alt="wallet-icon"
            />
            <CardContent
                href="/transactions"
                icon={outcomeArrow}
                name="Income Balance"
                value="6000"
                alt="incomeArrow-icon"
            />
            <CardContent 
                href="/transactions"
                icon={incomeArrow}
                name="Outcome Balance"
                value="1530"
                alt="incomeArrow-icon"            
            />
          </div>
          <div className="flex justify-center gap-16">
            <CardList
              href="/transactions"
              icon={incomeArrow}
              name="Outcome Balance"
              value="1530"
              alt="incomeArrow-icon"            
            />
            <AccountDisplay />
          </div>
        </main>
    )
}