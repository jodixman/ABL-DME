import React from 'react'

import { MdOutlineApps, MdKeyboardArrowDown } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"
import Card2 from "./bagian2/Card2"
import { mic1 } from "../../public"
import Image from "next/image"
import Category from "./bagian2/Category"

const page = () => {
  return (
    <div className='flex flex-row justify-center md:p-20  px-2 mt-20 md:gap-x-20 h-full border'>
      
      {/*--- Kiri ---*/}
      <div className='flex flex-col'>
        <Category />
        <div className='mt-10'><Category/></div>
      </div>
      {/*--- Kanan ---*/}
      <div className='max-w-[930px]'>
        <div className='bg-blue-500 w-full md:max-h-[295px] max-h-[100px] overflow-hidden  cursor-pointer flex-wrap'>
          <Image src={mic1} className='w-full object-cover hover:scale-105 duration-700 transition'/>
        </div>
        <h1 className='font-bold text-[24px]'> Collection Home 03 - Featured</h1>
        <p className='border-b pb-5 mb-10'>Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. 
          Duis tristique del ante le maliquam praesent murna de tellus laoreet cosmopolis. Quisque hendrerit nibh an purus</p>
        
        {/*-- View as --*/}
        <div className='flex flex-row gap-x-5 mb-10'>
          <p>VIEW AS</p>
          <div className='flex flex-row gap-x-1 justify-center'>
            <div className='inline-block border p-1 text2xl'><MdOutlineApps /></div>
            <div className='inline-block border p-1 text2xl'><GiHamburgerMenu /></div>
          </div>  
        </div>

        {/*-- Product --*/}
        <div>
          <Card2 />
          <Card2 />
        </div>
      </div>
    </div>
  )
}

export default page