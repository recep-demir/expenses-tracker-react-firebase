import React from 'react'

const Header = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  return (
    <div>
    <h2>
      Expenses Tracker
    </h2>
    <button onClick={()=>setIsVisible(!isVisible)}>Toggle Message</button>
    {isVisible && <p>Hello</p>}

    </div>
  )
}

export default Header