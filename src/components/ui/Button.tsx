//Sample button component 
import React from 'react'

type ButtonProps = {
    children: React.ReactNode
    onClick: () => void
}

const Button = ({children, onClick}: ButtonProps)  => {

  return (
    <button className='border border-red-400 rounded py-2 px-1' onClick={onClick}>{children}</button>
  )
}

export default Button
