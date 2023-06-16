import React from 'react'
import { AiFillStar, AiFillFire } from "react-icons/ai"
import { mesin1, mesin2, mesin3, mesin4 } from "../../../public"
import Image from "next/image"

const page = () => {
  return (
    <div className='py-20'>
        <div className='h-full w-full flex-wrap flex flex-row justify-center items-cneter gap-x-10 gap-y-10 md:gap-y-0'>
            {/*=== Kiri[Image] ===*/}
            <div className='border flex flex-col justify-center gap-y-5 flex-wrap'>
                <div className='bg-blue-500 w-[371px] h-[444px] mx-auto overflow-hidden'><Image src={mesin1} className='object-cover w-full h-full'/></div>
                <div className='md:flex flex-row gap-x-10 md:gap-x-2 flex-wrap justify-center items-center gap-y-10 grid grid-cols-2 mx-auto py-10 md:py-0'>
                    <div className='bg-red-500 w-[121px] h-[144px] cursor-pointer overflow-hidden'><Image src={mesin1} className='object-cover w-full h-full'/></div>
                    <div className='bg-yellow-500 w-[121px] h-[144px] cursor-pointer overflow-hidden'><Image src={mesin2} className='object-cover w-full h-full'/></div>
                    <div className='bg-green-500 w-[121px] h-[144px] cursor-pointer overflow-hidden'><Image src={mesin3} className='object-cover w-full h-full'/></div>
                    <div className='bg-purple-500 w-[121px] h-[144px] cursor-pointer overflow-hidden'><Image src={mesin4} className='object-cover w-full h-full'/></div>
                </div>
            </div>
            {/*=== Kanan[Text] ===*/}
            <div className='border max-w-[435px] px-4'>
                <h1 className='text-[40px]'>{`(Product 22) Sample - Wheels And Tires For Sales`}</h1>
                <div className='flex flex-row gap-x-10 my-2'>
                    <div className='flex flex-row gap-x-2'>
                        <div className='flex flex-rows text-[18px]'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p className='text-[12px]'>2 Reviews</p>
                    </div>
                    
                    <div className='flex flex-row gap-x-2 text-red-500'>
                        <AiFillFire/>
                        <p className='text-[12px]'>5 sold in last 25 hours</p>
                    </div>
                </div>

                <p className='text-[12px] my-4'>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis...</p>
                <div className='my-4'>
                    <p className='text-[12px]'>Vendor: Collete</p>
                    <p className='text-[12px]'>SKU:    WT006-1</p>
                    <p className='text-[12px]'>Availability: in stock</p>
                </div>
                <h1 className='text-black font-bold text-xl'>$570.00</h1>
                
                <div className='my-5 cursor-pointer'>
                    <p><span className='text-black font-bold mb-4'>Size</span>: 19</p>
                    <div className='flex flex-row gap-x-4'>
                        <p className='p-4 border inline-block'>18</p>
                        <p className='p-4 border inline-block'>18</p>
                        <p className='p-4 border inline-block'>18</p>
                        <p className='p-4 border inline-block'>18</p>
                    </div>
                </div>

                {/*---- Button ----*/}
                <button className='bg-black px-20 py-5 font-bold text-white hover:bg-white hover:text-black transition duration-500 border shadow-sm'>ADD TO CART</button>
            </div>
        </div>
    </div>
  )
}

export default page