"use client";
import { DME } from "../../public"
import React, { useState } from 'react'
import Image from "next/image"
import { GiHamburgerMenu } from "react-icons/gi"
import { RiCloseLine } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"
import Link from "next/link"

function Navbar() {



  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="">
      <div className="bg-white fixed w-full flex flex-row justify-around 
      items-center gap-x-10 border shadow-md flex-wrap z-[99]">
        <Image src={DME} className="w-[10rem]"/>
        <ul className="md:flex flex-row items-center gap-x-2 text-2xl hidden">
          <li className="h-[6rem] w-[8rem] bg-[#F3F3F3] flex items-center justify-center text-red-500 cursor-pointer"><Link href="/">About</Link></li>
          <li><Link href="/visi" className=" transition h-[6rem] w-[10rem] hover:bg-[#F3F3F3] flex items-center justify-center cursor-pointer">Visi & Misi</Link></li>
          <li className="transition h-[6rem] w-[10rem] hover:bg-[#F3F3F3] flex items-center justify-center cursor-pointer"><Link href="/product">Products</Link></li>
          <li className="transition h-[6rem] w-[12rem] hover:bg-[#F3F3F3] flex items-center justify-center cursor-pointer"><Link href="/news">News / Events</Link></li>
        </ul>
        {/*--- Burger ---*/}
        <div className="bg-[#29AAD6] p-2 cursor-pointer text-white relative md:hidden">
          {toggleMenu
          ? <RxCross2 onClick={() => setToggleMenu(!toggleMenu)} className="text-3xl transition"/>
          : <GiHamburgerMenu onClick={() => setToggleMenu(!toggleMenu)} className="text-3xl transition"/>
          }
 
              <ul className={toggleMenu ? `text-left items-center text-2xl absolute bg-[#29AAD6] right-0 w-[16rem] mt-3 
              duration-500 poly2`
              : `text-left items-center text-2xl absolute bg-[#29AAD6] right-0 w-[16rem] mt-3 duration-500 poly1`} 
              >
              <li className="flex items-center py-2"><Link href="/" className="pl-4">About</Link></li>
              <li className="transition hover:bg-[#F3F3F3] flex items-center border py-2"><Link href="/visi" className="pl-4">Visi & Misi</Link></li>
              <li className="transition hover:bg-[#F3F3F3] py-2 border"><Link href="/product" className="pl-4">Products</Link></li>
              <li className="transition hover:bg-[#F3F3F3] py-2"><Link href="/news" className="pl-4">News / Events</Link></li>
            </ul>

        </div>
      </div>
    </div>
  )
}

export default Navbar