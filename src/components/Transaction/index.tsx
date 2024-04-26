'use client'

interface TransactionProps {
    amount: string;
    date: string;
    sourceAccount: string;
    targetAccount: string;
  }
  
  export function Transaction(props: TransactionProps) {
    return (
      <div className="flex flex-col justify-center gap-6 p-6 bg-white rounded-lg">
        <h1 className=" text-grayZeroTwo text-xl ">Transaction</h1>
        <div className="grid gap-4">
          <label htmlFor="amount" className="block font-medium text-gray-600">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="R$0,00"
            defaultValue={props.amount}
          />
  
          <label htmlFor="date" className="block font-medium text-gray-600">
            Date
          </label>
          <input
            type="text"
            id="date"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="26/05/2024"
            defaultValue={props.date}
          />
  
          <label htmlFor="sourceAccount" className="block font-medium text-gray-600">
            Source Account
          </label>
          <select
            id="sourceAccount"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            defaultValue={props.sourceAccount}
          >
            <option value="Bradesco">Bradesco</option>
            <option value="Itau">Itau</option>
          </select>
  
          <label htmlFor="targetAccount" className="block font-medium text-gray-600">
            Target Account
          </label>
          <select
            id="targetAccount"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            defaultValue={props.targetAccount}
          >
            <option value="Investimento">Investimento</option>
          </select>
        </div>
  
        <button className="mt-4 px-4 py-2 bg-primaryColor text-white font-bold rounded-md">
          Save
        </button>
      </div>
    );
  }
  