import React, { useState } from 'react'


export const GlobalContext = createContext();


const GlobalProvider = ({children}) => {
const [transaction,setTransaction] = useState(()=>{
  const saved = localStorage.getItem('transactions')
  return saved ? JSON.parse(saved) : [];
})


  return (
    <div>GlobalProvider</div>
  )
}

export default GlobalProvider