import React from 'react'

const Top = () => {
  return (
    <div className='relative z-[1]'>
      <div style={{backgroundImage: `url('https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png')`}} 
        className=' bg-cover z-[1] bg-center flex flex-wrap '>
          <div className='text-center flex flex-col justify-center items-center gap-y-10  md:h-[40rem] z-[40] py-20 w-[48rem] mx-auto'>
            <h1 className='text-white text-3xl'>WE ARE PROUD</h1>
            <h2 className='text-red-500 text-5xl font-bold'>TO BE ALWAYS ON DEMAND</h2>
            <h2 className='text-white'>sentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lore</h2>
            <button className='text-white bg-red-500 px-10 py-5 font-semibold hover:bg-black text-[18px] transition duration-300 ring-none rounded-lg'>CONTACT WETH US</button>
          </div>
        </div>
        <div className='w-full h-full bg-black absolute opacity-60 top-0'>2</div>
    </div>
  )
}

export default Top