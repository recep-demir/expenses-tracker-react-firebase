import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Transaction from './Transaction'

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)
  const [isVisible, setIsVisible] = React.useState(false)

  
  return (
    <div>
      <div>
        <h3>History</h3> <button style={{backgroundColor:"#9C88FF", border:"none", padding:"5px", color:"white" }} onClick={()=>setIsVisible(!isVisible)}>{isVisible ? "Hide History" : "Show History"}</button> 

      </div>
         
          
          {isVisible && ( <ul id="list" className="list">
        {transactions.map(transaction => (<Transaction key = {transaction.id} transaction={transaction}/>) )}
        
      </ul>)}
      

    </div>
  )
}

export default TransactionList