import React, { createContext, useEffect, useState } from 'react'
import { toastSuccess } from '../helpers/ToastNotify';


export const GlobalContext = createContext();


const GlobalProvider = ({children}) => {
const [transactions,setTransactions] = useState(()=>{
  const saved = localStorage.getItem('transactions')
  return saved ? JSON.parse(saved) : [];
})

useEffect(() => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}, [transactions]);

const addTransaction = (transaction) => {
  if (!transactions.some(item => item.id === transaction.id)) {
    setTransactions([transaction, ...transactions]);
    toastSuccess("Transaction added");
  }
};

const deleteTransaction = (id) =>{
  setTransactions(transactions.filter (item =>item.id !== id));
  toastSuccess("Transaction deleted");
}

  return (
    
    <GlobalContext.Provider value={{ transactions, addTransaction, deleteTransaction }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider