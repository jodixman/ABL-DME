import React from 'react'
import { loreng, face1 } from "../../../public"
import Image from "next/image"
import { AiFillFire } from "react-icons/ai"

const Card = () => {
  return (
    <div className='flex flex-col flex-wrap '>
        <div className='w-[34rem] md:w-[40rem] bg-white h-[20rem] relative'>
            <div className='absolute bg-red-500 p-3 text-2xl -top-10 right-0 rounded-full flex justify-center items-center text-white'>
              <AiFillFire />
            </div>

            <div className='flex flex-col justify-start items-start text-start gap-y-10 p-7'>
              <p className='text-2xl text-[#8B8B8B]'>I was very impressed by the company service lore 
                  ipsum is simply free text used by copy typing refersiing. Neque est qui</p>
              <div>
                  <h1 className='text-2xl text-red-500 font-bold'>Mike Hardson</h1>
                  <p className='font-semibold text-xl'>CO Founder</p>
              </div>
            </div>
            <div className='w-full h-[3rem] overflow-hidden absolute bottom-0'><Image src={loreng}/></div>
            <div className='w-[6rem] h-[6rem] overflow-hidden absolute -bottom-10 right-10 border-4 border-red-500 p-2'><Image src={face1}/></div>
        </div>
    </div>
  )
}

export default Card