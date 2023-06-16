"use client"
import React, { useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi"



const page = () => {

    const poly1 = {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
    };

    const [nav, setNav] = useState(false)

  return (
    <div className='relative w-full h-[40rem]'>
        <div className='bg-blue-500 p-4 flex flex-col 
        justify-center absolute  items-center cursor-pointer'
        onClick={() => setNav(!nav)}>
            <GiHamburgerMenu />
        </div>
        <div className={nav ? `bg-red-500 p-10 absolute top-10 poly2 duration-700` 
        : "bg-red-500 p-10 absolute top-10 duration-700 poly1"}>
            <ul>
                <li>Hero</li>
                <li>Hero</li>
                <li>Hero</li>
                <li>Hero</li>
            </ul>
        </div>
        <div className='bg-yellow-500 p-10 absolute top-20' style={poly1}></div>
    </div>
  )
}

export default page