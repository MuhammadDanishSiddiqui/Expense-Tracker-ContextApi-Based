import React,{useReducer,createContext} from 'react'
import reducer from './reducer'

const initialState={
    transactions:[]
}

export const MyContext=createContext(initialState)



export const GlobalProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    function addTransaction(transaction){
        dispatch({type:"ADD_TRANSACTION",payload:transaction})
       }
       
       function deleteTransaction(id){
           dispatch({type:"DELETE_TRANSACTION",payload:id})
          }
    
function updateTransaction(index,transaction){
    dispatch({type:"UPDATE_TRANSACTION",payload:{index,transaction}})   
}

    return <MyContext.Provider value={
    {transactions:state.transactions,
    deleteTransaction,
    addTransaction,
    updateTransaction    
}}>
{children}
</MyContext.Provider>
}