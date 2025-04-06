import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const TransactionList = () => {
  const transactions = useContext(GlobalContext)

  
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (<li className="minus">
          {transaction.text} <span>-$400</span><button className="delete-btn">x</button>
        </li>) )}
        
      </ul>
    </div>
  )
}

export default TransactionList