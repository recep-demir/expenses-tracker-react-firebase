import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const { addTransaction } = useContext(GlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text || !amount) return; // Boş değer kontrolü

    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction)
    setText('')
    setAmount(0)
  }

  return (
    <div className="transaction-form-container">
      <h3>Add New Transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction Name</label>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="e.g. Shopping, Salary..." 
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Enter amount..." 
          />
          {/* Modern Yardımcı Not Kısmı */}
          <small className="input-helper">
            <span className="info-icon">ⓘ</span> 
            Note: Use <strong>minus (-)</strong> for expenses and <strong>plus (+)</strong> for income.
          </small>
        </div>

        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction