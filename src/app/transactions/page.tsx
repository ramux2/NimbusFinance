import { trace } from "next/dist/trace"
import { Transaction } from "@/components/Transaction";
import { CardContent } from "@/components/CardContent";
import walletIcon from "../../../public/icons/walletBlue.svg"
import outcomeArrow from "../../../public/icons/outcomeArrow.svg"
import incomeArrow from "../../../public/icons/Up arrow.svg"
import { CardList } from "@/components/CardList";
import { AccountDisplay } from "@/components/AccountDisplay";

export default function TransactionPage () {
    return (
        <main>
            <div className="flex justify-center">
            <div className="flex flex-col gap-6">
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
                     <CardList
                        href="/transactions"
                        icon={incomeArrow}
                        name="Outcome Balance"
                        value="1530"
                        alt="incomeArrow-icon"            
                        />
                </div>
                
                <div className="w-80 ml-6 mt-14">
                    <Transaction
                        amount = "0,00"
                        date= "24/04/2010"
                        sourceAccount= "Itau"
                        targetAccount= "Investimento"
                    />
                </div>

            </div>

        </main>
    )
}