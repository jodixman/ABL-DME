import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { ship } from "../../public"


const Product = () => {
  return (
    <div className='mt-20 z-[-99]'>
        <div className='flex flex-col justify-center items-center gap-y-10 mb-20 flex-wrap'>
            <h1 className='text-5xl'>OUR SERVICES</h1>
            <p className='max-w-[25rem] md:max-w-full text-center'>Lorem ipsum is simply dummy text of the printing and typesetting industry</p>

            <div className='flex md:flex-row flex-col justify-center gap-x-10 flex-wrap'>
                {/*=== CARD1 1*/}
                <div className='relative md:mb-[10rem] mb-[2rem] border shadow-md max-w-[25rem] max-h-[45rem] '>
                    {/*--- Image ---*/}
                    <div className='w-[25rem] h-[13rem] bg-red-50 overflow-hidden'>
                        <Image src={ship} className='w-full '/>
                    </div>

                    {/*--- Text ---*/}
                    <div className='px-5 flex flex-col gap-y-2 py-10 '>
                        <div className='flex flex-col gap-y-1'>
                            <h1 className='text-2xl font-bold'> OCEAN FREIGHT SHIPPING</h1>
                            <div className='border-b-2 border-red-500 w-[5rem]'></div>
                        </div>
                        <p className='text-[18px]'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standart</p>
                        <Link href="/product">
                            <div className='flex flex-row gap-x-4 hover:text-red-500 group max-w-[9rem] items-center font-bold'>
                                <h1>READ MORE</h1>
                                <p className='group-hover:translate-x-6 transition duration-500'>{`>`}</p>
                            </div>
                        </Link>
                    </div>

                    {/*--- Tambah ---*/}
                    <div className='bg-red-500 p-5 bottom-0 absolute right-0 text-4xl text-white group cursor-pointer hover:bg-black transition duration-500'>
                        <p className='group-hover:translate-y-6 transition duration-500'>+</p>
                    </div>
                </div>

                {/*=== CARD1 2*/}
                <div className='relative md:mb-[10rem] mb-[2rem] border shadow-md max-w-[25rem] max-h-[45rem] flex flex-wrap'>
                    {/*--- Image ---*/}
                    <div className='w-[25rem] h-[13rem] bg-red-50 overflow-hidden'>
                        <Image src={ship} className='w-full '/>
                    </div>

                    {/*--- Text ---*/}
                    <div className='px-5 flex flex-col gap-y-2 py-10'>
                        <div className='flex flex-col gap-y-1'>
                            <h1 className='text-2xl font-bold'> OCEAN FREIGHT SHIPPING</h1>
                            <div className='border-b-2 border-red-500 w-[5rem]'></div>
                        </div>
                        <p className='text-[18px]'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standart</p>
                        <Link href="/product">
                            <div className='flex flex-row gap-x-4 hover:text-red-500 group  max-w-[9rem] items-center font-bold'>
                                <h1>READ MORE</h1>
                                <p className='group-hover:translate-x-6 transition duration-500'>{`>`}</p>
                            </div>
                        </Link>
                    </div>

                    {/*--- Tambah ---*/}
                    <div className='bg-red-500 p-5 bottom-0 absolute right-0 text-4xl text-white group cursor-pointer hover:bg-black transition duration-500'>
                        <p className='group-hover:translate-y-6 transition duration-500'>+</p>
                    </div>
                </div>

                {/*=== CARD1 3*/}
                <div className='relative mb-[10rem] border shadow-md max-w-[25rem] max-h-[45rem] '>
                    {/*--- Image ---*/}
                    <div className='w-[25rem] h-[13rem] bg-red-50 overflow-hidden'>
                        <Image src={ship} className='w-full '/>
                    </div>

                    {/*--- Text ---*/}
                    <div className='px-5 flex flex-col gap-y-2 py-10'>
                        <div className='flex flex-col gap-y-1'>
                            <h1 className='text-2xl font-bold'> OCEAN FREIGHT SHIPPING</h1>
                            <div className='border-b-2 border-red-500 w-[5rem]'></div>
                        </div>
                        <p className='text-[18px]'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standart</p>
                        <Link href="/product">
                            <div className='flex flex-row gap-x-4 hover:text-red-500 group  max-w-[9rem] items-center font-bold'>
                                <h1>READ MORE</h1>
                                <p className='group-hover:translate-x-6 transition duration-500'>{`>`}</p>
                            </div>
                        </Link>
                    </div>

                    {/*--- Tambah ---*/}
                    <div className='bg-red-500 p-5 bottom-0 absolute right-0 text-4xl text-white group cursor-pointer hover:bg-black transition duration-500'>
                        <p className='group-hover:translate-y-6 transition duration-500'>+</p>
                    </div>
                </div>


            </div>

            
        </div>
    </div>
  )
}

export default Product