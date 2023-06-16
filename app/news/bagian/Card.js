import React from 'react'
import { BiUserCircle } from "react-icons/bi"
import { FaRegComments } from "react-icons/fa"
import { contract1 } from "../../../public"
import Image from "next/image"

const Card = () => {
  return (
    <div className=''>
        <div className='max-w-[366px] h-[569px] bg-white shadow-md border mx-auto group'>
            <div className='w-full bg-blue-500 h-[261.14px] overflow-hidden relative '>
                <Image className='w-full object-cover h-full group-hover:brightness-50 transition duration-500 cursor-pointer' src={contract1}/>
            </div>
                <div className='p-5'>
                    <div className='flex flex-row gap-x-5 items-center'>
                        <div className='flex flex-row items-center gap-x-2'>
                            <BiUserCircle className='text-red-500'/>
                            <p className='hover:text-red-500 duration-500 transition cursor-pointer'>Admin</p>
                        </div>
                        <div className='flex flex-row items-center gap-x-2'>
                            <FaRegComments className='text-red-500'/>
                            <p className='cursor-pointer hover:text-red-500 duration-500 transition'>{"Comment (0)"}</p>
                        </div>
                    </div>
                    <h1 className='text-[1.7rem] mt-5 font-bold cursor-pointer hover:text-red-500 duration-300 transition'>Donec dictum felis dolor , nec consequat hendrerit a commodo tempus.</h1>
                </div>
        </div>
    </div>
  )
}

export default Card