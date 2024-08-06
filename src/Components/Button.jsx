// import React from 'react'
import { IoIosReturnRight } from "react-icons/io";





const Button = ({title = 'Get Started'}) => {
  return (
    <div className='w-40 px-3 py-2 bg-zinc-400 rounded-full flex items-center justify-between'>
      <span className='text-sm font-medium'>{title}</span>
      <IoIosReturnRight/>
    </div>
  )
}




export default Button
