import React,{useContext} from 'react'
import {MyContext} from './context/GlobalState'

function IncomeExpense() {
    const {transactions}=useContext(MyContext)
    let totalIncome=0
    let totalExpense=0
    
    for(let i=0;i<transactions.length;i++){
        if(transactions[i].type==="Income")
        totalIncome+=transactions[i].amount
        else
        totalExpense+=transactions[i].amount
    }

    const balance=totalIncome-totalExpense
    
    return (
        <div className="inc_exc_wrapper">
            <div className="balance">
                <h3>Balance:${balance}</h3>
            </div>
            <div className="inc_exp">
                <div className="inc">
                    <h4>Income</h4>
                    <p>${totalIncome}</p>
                </div>
                <div className="exc">
                    <h4>Expense</h4>
                    <p>${totalExpense}</p>
                </div>
            </div>
        </div>
    )
}

export default IncomeExpense
