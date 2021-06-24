import React,{useState,useContext} from 'react'
import {Modal} from 'react-bootstrap'
import {MyContext} from './context/GlobalState'


function Transactions() {
    const [isEdit,setIsEdit]=useState(false)
    const [editedIndex,setEditedIndex]=useState()
    const {transactions,deleteTransaction,addTransaction,updateTransaction}=useContext(MyContext)
    const [openIncomeModal,setOpenIncomeModal]=useState(false)
    const [openExpenseModal,setOpenExpenseModal]=useState(false)
    const [incomeDetails,setIncomeDetails]=useState({date:"",type:"Income",description:"",amount:""})
    const [expenseDetails,setExpenseDetails]=useState({date:"",type:"Expense",description:"",amount:""})

    const handleIncome=()=>{
        setOpenIncomeModal(!openIncomeModal)
        let newTransaction={
            id:Math.floor(Math.random()*10000),
            date:incomeDetails.date,
            type:incomeDetails.type,
            description:incomeDetails.description,
            amount:+incomeDetails.amount
        }
        addTransaction(newTransaction)
        setIncomeDetails({date:"",type:"Income",description:"",amount:""})
      }

      const handleIncomeInput=(e)=>{

        setIncomeDetails((prev)=>{
            return{
                ...prev,
                [e.target.name]:e.target.value
            }
        })
      }

      
      
      const handleExpense=()=>{
        setOpenExpenseModal(!openExpenseModal)
        let newTransaction={
            id:Math.floor(Math.random()*10000),
            date:expenseDetails.date,
            type:expenseDetails.type,
            description:expenseDetails.description,
            amount:+expenseDetails.amount
        }
        addTransaction(newTransaction)
        setExpenseDetails({date:"",type:"Expense",description:"",amount:""})
      }

      const handleExpenseInput=(e)=>{

        setExpenseDetails((prev)=>{
            return{
                ...prev,
                [e.target.name]:e.target.value
            }
        })
      }

const handleEdit=(type,id)=>{
const index=transactions.findIndex((transaction)=>{
    return transaction.id===id
})
setIsEdit(true)
setEditedIndex(index)
if(type==="Income"){
    setOpenIncomeModal(!openIncomeModal)
    setIncomeDetails(
        {date:transactions[index].date,type:transactions[index].type,description:transactions[index].description,amount:transactions[index].amount}   
    )
}

if(type==="Expense"){
    setOpenExpenseModal(!openExpenseModal)
    setExpenseDetails(
        {date:transactions[index].date,type:transactions[index].type,description:transactions[index].description,amount:transactions[index].amount}   
    )
}

}

const handleUpdate=(type)=>{
   if(type==="Income"){
    setOpenIncomeModal(!openIncomeModal)
        let updatedTransaction={
            id:Math.floor(Math.random()*10000),
            date:incomeDetails.date,
            type:incomeDetails.type,
            description:incomeDetails.description,
            amount:+incomeDetails.amount
        }
        updateTransaction(editedIndex,updatedTransaction)
        setIncomeDetails({date:"",type:"Income",description:"",amount:""}) 
        setIsEdit(false)
        setEditedIndex("")   
   } 
   else if(type==="Expense"){
    setOpenExpenseModal(!openExpenseModal)
        let updatedTransaction={
            id:Math.floor(Math.random()*10000),
            date:expenseDetails.date,
            type:expenseDetails.type,
            description:expenseDetails.description,
            amount:+expenseDetails.amount
        }
        updateTransaction(editedIndex,updatedTransaction)
        setExpenseDetails({date:"",type:"Expense",description:"",amount:""}) 
        setIsEdit(false)
        setEditedIndex("")   
   } 
}

    return (
        <div className="transaction_wrapper">
            <div className="transactions_header">
                <h3>Transactions</h3>
                <div>
                    <h5 onClick={()=>setOpenIncomeModal(!openIncomeModal)}>+ Income</h5>
                    <h5 onClick={()=>setOpenExpenseModal(!openExpenseModal)}>+ Expense</h5>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {transactions.map((transaction)=>{
                    return <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    <td><button onClick={()=>handleEdit(transaction.type,transaction.id)} className="edit_btn">Edit</button><button onClick={()=>deleteTransaction(transaction.id)} className="delete_btn">Delete</button></td>
                </tr>
                })}
                   
                </tbody>



            </table>

            <Modal show={openIncomeModal} onHide={()=>{
                setOpenIncomeModal(!openIncomeModal)
                setIsEdit(false)
                setEditedIndex("")
                setIncomeDetails({date:"",type:"Income",description:"",amount:""})
            }}>
            <Modal.Header>Add Income</Modal.Header>
            <Modal.Body>
                <div className="input_filed">
                <label htmlFor="date">Date:</label>
                <input name="date" value={incomeDetails.date} onChange={handleIncomeInput} id="date" type="date"/>
                </div><br/>
                <div className="input_filed">
                <label  htmlFor="desc">Description:</label>
                <input name="description" value={incomeDetails.description} onChange={handleIncomeInput} id="desc" type="text"/>
                </div><br/>
                <div className="input_filed">
                <label  htmlFor="amt">Amount:</label>
                <input name="amount" value={incomeDetails.amount} onChange={handleIncomeInput} id="amt" type="number"/>
                </div>
                
            </Modal.Body>
            <Modal.Footer>
            {isEdit?<button onClick={()=>handleUpdate("Income")}>Update</button>:<button onClick={handleIncome}>Add</button>}
            </Modal.Footer>
            </Modal>  
            
            <Modal show={openExpenseModal} onHide={()=>{
                setOpenExpenseModal(!openExpenseModal)
                setIsEdit(false)
                setEditedIndex("")
                setExpenseDetails({date:"",type:"Expense",description:"",amount:""}) }}>
            <Modal.Header>Add Expense</Modal.Header>
            <Modal.Body>
            <div className="input_filed">
                <label htmlFor="date_exp">Date:</label>
                <input name="date" value={expenseDetails.date} onChange={handleExpenseInput} id="date_exp" type="date"/>
                </div><br/>
                <div className="input_filed">
                <label  htmlFor="desc_exp">Description:</label>
                <input name="description" value={expenseDetails.description} onChange={handleExpenseInput} id="desc_exp" type="text"/>
                </div><br/>
                <div className="input_filed">
                <label  htmlFor="amt_exp">Amount:</label>
                <input name="amount" value={expenseDetails.amount} onChange={handleExpenseInput} id="amt_exp" type="number"/>
                </div>
                
            </Modal.Body>
            <Modal.Footer>
            {isEdit?<button onClick={()=>handleUpdate("Expense")}>Update</button>:<button onClick={handleExpense}>Add</button>}
            </Modal.Footer>
            </Modal>  

        </div>
    )
}

export default Transactions
