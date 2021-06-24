import React from 'react'
import './App.css';
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import Transactions from './components/Transactions'
import {GlobalProvider} from './components/context/GlobalState'

function App() {

  return (
    <GlobalProvider>
  <Header/>
  <IncomeExpense/>
  <Transactions/>
  </GlobalProvider>
  )
}

export default App;


