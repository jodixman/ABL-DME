"use client";
import React, { useState } from 'react'
import { BsChevronUp } from "react-icons/bs"


const Category = () => {

    const [active, setActive] = useState(false)

  return (
    <div className='max-w-[410px] max-h-screen hidden md:flex duration-700 '>

    <div className='duration-700'>
      <div onClick={() => setActive(!active)} 
      className='flex flex-row items-center gap-x-2 border-b border-black py-4 mb-5 justify-between cursor-pointer'>
        <h1 className='font-bold text-[14px] w-[210px]'>CATEGORIES</h1>
        <div className={`${active ? "rotate-180 duration-500" : "rotate-0 duration-500"}`}><BsChevronUp /></div>
      </div>

      <ul className={`${active ? "flex flex-col gap-y-4 poly2 duration-700 max-h-full" : "poly1 duration-700 h-0"}`}>
          <li className='cursor-pointer hover:opacity-50'>Cosmopolis</li>
          <li className='cursor-pointer hover:opacity-50'>Suito</li>
          <li className='cursor-pointer hover:opacity-50'>Milanoces</li>
          <li className='cursor-pointer hover:opacity-50'>Blazero</li>
          <li className='cursor-pointer hover:opacity-50'>Giamos</li>
          <li className='cursor-pointer hover:opacity-50'>Metropolis</li>
        </ul>
    </div>

  </div>
  )
}

export default Category