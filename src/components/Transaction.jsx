import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const Transaction = ({transaction}) => {
  const {deleteTrasaction} = useContext(GlobalContext)

  const sign = transaction.amaount < 0 ? '-' : '+';
  return (
    <li className={transaction}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>deleteTrasaction(transaction.id)} className="delete-btn">x</button>
        </li>
  )
}

export default Transaction