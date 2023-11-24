"use client"
// this page is for dynamic logic of id page 
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'


import React, {useState} from 'react'

const Quantity = () => {
    const [num, setNum] = useState(1)
  return (
    <div className='flex items-center gap-x-3'>
      {/* DECREMENT  */}
      <div onClick={()=>{
        setNum(num <= 1 ? 1 : num - 1)
}} >
        <AiOutlineMinus></AiOutlineMinus>
      </div>
      {/* DIGIT  */}
      <div>
        {num}
      </div>
      {/* INCREAMENT  */}
      <div  onClick={()=>(
        setNum(num + 1)
      )}>
        <AiOutlinePlus></AiOutlinePlus>
      </div>
    </div>
  )
}

export default Quantity
