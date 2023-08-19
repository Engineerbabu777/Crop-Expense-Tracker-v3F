



type Props = {
    profit:any;
    setProfit:any;
}

export default function ProfitBody({profit , setProfit}:Props) {


    console.log(profit);

    return(<>

    <p>Expenses: {profit?.expenses.toLocaleString()}</p>
    <p>Debt: {profit?.debt.toLocaleString()}</p>
    <p>Sold For: {profit?.sold.toLocaleString()}</p>
    <p>Profit is: {profit?.profit.toLocaleString()}</p>



    
    
    
    
    </>)
}