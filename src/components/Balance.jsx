import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  // const amounts = transactions.map(transaction => transaction.amount)

  const total = transactions.reduce ((acc,item)=> (acc += item.amount), 0).toFixed(2)

  return (
    <div>
    <h4>Your Balance</h4>
    <h1 className="balance">${total}</h1>
    </div>
  )
}

export default Balance