const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TRANSACTION":
            return{
                ...state,
                transactions:[...state.transactions,action.payload]
            }
         case "DELETE_TRANSACTION":
            return{
                ...state,
                transactions:state.transactions.filter((transaction)=>{
                    return transaction.id!==action.payload
                })
            }
         case "UPDATE_TRANSACTION":
             let newTransactions=[...state.transactions]
             newTransactions[action.payload.index]=action.payload.transaction
             return{
                ...state,
                transactions:newTransactions
             }   
            default:return state
    }
}

export default reducer