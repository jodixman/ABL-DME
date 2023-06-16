import React from 'react'
import Image from "next/image"
import { DME } from "../../public"
import { AiTwotonePhone, AiOutlineMail, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai"
import { FaFax, FaLinkedinIn } from "react-icons/fa"
import { ImFacebook } from "react-icons/im"
import { IoIosArrowForward } from "react-icons/io"
import { BiNavigation } from "react-icons/bi"

const Footer = () => {
  return (
    <div className='bg-[#141414] text-[#969696] flex flex-col  items-start flex-wrap px-4'>
     <div className='mx-auto max-w-[90rem]'>
         {/*=== Top ===*/}
         <div className='flex md:flex-row flex-col md:w-auto w-full md:justify-around gap-x-[10rem] gap-y-10  my-10 mx-auto flex-wrap'>
            {/*--- Icon ---*/}
            <div className=' flex flex-col gap-y-5 max-w-[20rem] flex-wrap'>
                <Image src={DME} className='w-[8rem]'/>
                <p>It was popularised in the 1960s with the release to Letraset sheets containing</p>
                <div className='flex flex-row gap-x-2 items-center'>
                  <AiTwotonePhone />
                  <p className='text-[#EF4444]'>+88 01911 837404</p>
                </div>
                
                <div className='flex flex-row gap-x-2  items-center'>
                  <AiOutlineMail />
                  <p className='text-[#EF4444]'>info@companyname.com</p>
                </div>

                <div className='flex flex-row gap-x-2 items-center'>
                  <FaFax />
                  <p className='text-[#EF4444]'>+88 02 123456</p>
                </div>
                {/*---- Logo ----*/}
                <div className='flex flex-row gap-x-1'>
                  <div className='p-2 inline-block bg-slate-300 rounded-full cursor-pointer hover:bg-red-500 hover:text-white'>
                    <ImFacebook className=''/>
                  </div>

                  <div className='p-2 inline-block bg-slate-300 rounded-full cursor-pointer hover:bg-red-500 hover:text-white'>
                    <AiOutlineTwitter className=''/>
                  </div>

                  <div className='p-2 inline-block bg-slate-300 rounded-full cursor-pointer hover:bg-red-500 hover:text-white'>
                    <AiFillYoutube className=''/>
                  </div>

                  <div className='p-2 inline-block bg-slate-300 rounded-full cursor-pointer hover:bg-red-500 hover:text-white'>
                    <FaLinkedinIn className=''/>
                  </div>

                </div>
            </div>
            {/*--- Quick ---*/}
            <div className=' max-w-full flex-wrap flex flex-col'>
              <div>
                <h1 className='text-2xl font-bold text-white'> QUICK LINKS</h1>
                <div className='border-b-2 border-red-500 w-[3rem]'></div>
              </div>

              <ul className='flex flex-col gap-y-5 mt-5 text-[15px]'>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#EB0728]'><span><IoIosArrowForward /></span> Company Overview</li>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#EB0728]'><span><IoIosArrowForward /></span> Our Services</li>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#EB0728]'><span><IoIosArrowForward /></span> Media & Publications</li>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#EB0728]'><span><IoIosArrowForward /></span> Blog</li>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#EB0728]'><span><IoIosArrowForward /></span> Contact Us</li>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#EB0728]'><span><IoIosArrowForward /></span> Freight Gallery</li>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#EB0728]'><span><IoIosArrowForward /></span> Image Galery</li>
              </ul>
            </div>
            {/*--- Usefull ---*/}
            <div className=''>
              <div>
                <h1 className='text-2xl font-bold text-white'> USEFULL LINKS</h1>
                <div className='border-b-2 border-red-500 w-[3rem]'></div>
              </div>

              <ul className='flex flex-col gap-y-5 mt-5 text-[15px]'>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#EB0728]'><span><IoIosArrowForward /></span> Create Shipping</li>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#EB0728]'><span><IoIosArrowForward /></span> Tracking</li>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#EB0728]'><span><IoIosArrowForward /></span> Shipment History</li>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#EB0728]'><span><IoIosArrowForward /></span> Typography</li>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#EB0728]'><span><IoIosArrowForward /></span> Button Accordion</li>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#EB0728]'><span><IoIosArrowForward /></span> Tracking Result</li>
              </ul>
            </div>
            {/*--- Opening ---*/}
            <div className='max-w-20'>
              <div>
                <h1 className='text-2xl font-bold text-white'> OPENING HOURS</h1>
                <div className='border-b-2 border-red-500 w-[3rem]'></div>
              </div>

              <div className='my-10 flex flex-col gap-y-5'>
                <p>Mon to Fri 09.30AM to 05.30PM</p>
                <p>Sun: Closed</p>
              </div>

              <div className='relative mb-10 md:max-w-[30rem] border-none w-full '>
                <input type='text' className='border py-5 w-full bg-transparent border-transparent pl-3' placeholder='Enter your Email'/>
                <div className='p-[13px] bg-red-500 text-white rounded-sm absolute cursor-pointer top-0 right-0'>
                  <BiNavigation className='text-4xl'/>
                </div>
              </div>
            </div>
        </div>
        {/*=== Bottom ===*/}
        <div className='flex md:flex-row md:justify-between items-center mt-20 w-full mx-auto flex-wrap justify-center gap-y-2 mb-5'>
            <p>COPYRIGHT &copy; 2017 <span className='text-red-500'>WROLD SHIPPING</span> ALL RIGHTS RESERVED</p>
            <p>DESIGN & DEVELOPMENT BY <span className='text-red-500'>WEB24SERVICE</span></p>
        </div>
     </div>
    </div>
  )
}

export default Footer