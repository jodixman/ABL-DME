import React from 'react'

const Top = () => {
  return (
    <div className='relative z-[1]'>
      <div style={{backgroundImage: `url('https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png')`}} 
        className=' bg-fixed z-[1] bg-center flex flex-wrap bg-no-repeat bg-cover'>
          <div className='text-center flex flex-col justify-center items-center gap-y-4  md:h-[30rem] z-[40] py-20 w-full mx-auto'>
            <h1 className='text-white text-xl'>WE PROUD</h1>
            <h2 className='text-white text-5xl font-bold'>THE BEST SEA AND AIR FREIGHT SERVICES</h2>
            <h2 className='text-yellow-500 text-4xl font-bold'>For Book Your Shipping From any Country</h2>
            <button className='text-white bg-red-500 px-10 py-5 font-semibold hover:bg-black text-[18px] transition duration-300 ring-none rounded-lg'>CONTACT WETH US</button>
          </div>
        </div>
        <div className='w-full h-full bg-[#791C18] absolute opacity-80 top-0'>2</div>
    </div>
  )
}

export default Top