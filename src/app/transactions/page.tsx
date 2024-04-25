import { trace } from "next/dist/trace"
import { Transaction } from "@/components/Transaction";

export default function TransactionPage () {
    return (
        <main>
            <div className="w-80 ml-6 mt-14">
                <Transaction
                  amount = "0,00"
                  date= "24/04/2010"
                  sourceAccount= "Itau"
                  targetAccount= "Investimento"
                />
            </div>
        </main>
    )
}