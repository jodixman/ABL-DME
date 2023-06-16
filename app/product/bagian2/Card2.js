import React from 'react'
import { mec2 } from "../../../public"
import Image from "next/image"
import Link from "next/link"


const Card2 = () => {
  return (
    <div className='border-b-4 pb-20 pt-5'>
        <div className='flex md:flex-row flex-col gap-y-4 justify-center items-center gap-x-10 flex-wrap'>
            {/*=== Kiri[Image] ===*/}
            <div className='flex w-full md:w-[224.5px] md:h-[224.5px] h-[324.5px] bg-transparent overflow-hidden cursor-pointer '>
                <Image src={mec2} className='object-cover hover:scale-105 duration-700 transition'/>
            </div>
            {/*=== Kanan[text] ===*/}
            <Link href="/product/isiproduct" className='flex-1 flex flex-col max-h-screen gap-y-1 md:p-4 justify-between w-full '>
                <h3 className='text-[12px]'>COLLETTE</h3>
                <h2 className='text-[12px]'>{"(Product 22) Sample - Wheels And Tires For Sale"}</h2>
                <p className='text-[12px] my-2 hidden lg:inline'>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. 
                Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an
                sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis. 
                Vestibulum ante ipsum primis in faucibus orci... </p>
                <p className='text-[14px] font-bold mb-3'>$570.00</p>
                <button className='border border-black md:max-w-[15rem] py-[10px] px-[15px] hover:bg-black hover:text-white 
                duartion-700 transition font-bold'>QUICK ADD</button>
            </Link>
        </div>
    </div>
  )
}

export default Card2