import React from 'react'
import { contract, mechin1, mechin2 } from "../../../public"
import Image from "next/image"
import { BiCheck } from "react-icons/bi"

const Tengah = () => {
  return (
<div className='flex flex-row gap-x-20 flex-wrap justify-center w-full md:my-[10rem] px-5 mt-[5rem] mb-[10rem]'>
            {/* LEFT[image] */}
            <div className='flex flex-row gap-x-5 flex-wrap gap-y-5'>
                <div className='flex flex-col gap-y-5 flex-wrap'>
                    <div className='bg-blue-500 w-[20rem] h-[20rem] overflow-hidden'><Image src={mechin1}/></div>
                    <div className='bg-blue-500 w-[20rem] h-[20rem] overflow-hidden'><Image src={mechin2} className='object-cover object-center'/></div>
                </div>
                <div className='bg-red-500 w-[20rem] h-[40rem] overflow-hidden'><Image src={contract} className='w-full h-full object-cover object-center'/></div>
            </div>
            {/* RIGHT[text] */}
            <div className='max-w-[46rem] mt-10 md:mt-0'>
                <h1 className='text-2xl text-[#868686] border-b-2 border-red-500 pb-1 w-[19rem] mb-5'>GET TO KNOW ABOUT US</h1>
                <h2 className='text-black text-6xl font-bold mb-10'>We're Professional Quality Leaders</h2>
                <p className='text-2xl text-[#868686]'>There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or words even slightly believable.</p>
                {/*- Centang -*/}
                <div className='flex flex-row items-center gap-x-8 my-10'>
                    {/*- Satu -*/}
                    <div className='flex flex-col gap-y-1'>
                        <div className='flex flex-row gap-x-2'>
                            <div className='p-1 bg-red-500 rounded-full text-white inline-block text-xl font-bold'><BiCheck /></div>
                            <p className='text-xl text-black font-bold'>Magnis Dis Nascet</p>
                        </div>
                        <h1 className='text-2xl text-[#868686] font-semibolds'>Lorem ipsum is free do sit</h1>
                    </div>

                    {/*- Dua -*/}
                    <div className='flex flex-col gap-y-1'>
                        <div className='flex flex-row gap-x-2'> 
                            <div className='p-1 bg-red-500 rounded-full text-white inline-block text-xl font-bold'><BiCheck /></div>
                            <p className='text-xl text-black font-bold'>Libero id Edge</p>
                        </div>
                        <h1 className='text-2xl text-[#868686] font-semibolds'>Lorem ipsum is free do sit</h1>
                    </div>
                </div>

                {/*- Nilai -*/}
                <div className=' max-w-[30rem] flex flex-col gap-y-10'>
                    {/* 1 */}
                    <div>
                        <div className='flex flex-row justify-between items-centers mb-3 max-w-[28rem]'>
                            <h1 className='text-xl text-black font-bold'>Industry</h1>
                            <p className='text-xl text-black font-bold '>91%</p>
                        </div>
                        <div className='relative'>
                            <div className='bg-red-500 p-1 w-[28rem] absolute'></div>
                            <div className='bg-[#F6F6F6] p-1 w-[30rem]'></div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div>
                        <div className='flex flex-row justify-between items-centers mb-3 max-w-[20rem]'>
                            <h1 className='text-xl text-black font-bold'>Construction</h1>
                            <p className='text-xl text-black font-bold'>78%</p>
                        </div>
                        <div className='relative'>
                            <div className='bg-red-500 p-1 w-[20rem] absolute'></div>
                            <div className='bg-[#F6F6F6] p-1 w-[30rem]'></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
  )
}

export default Tengah