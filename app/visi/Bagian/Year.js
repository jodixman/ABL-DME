import React from 'react'

function Year() {
  return (
    <div className='mt-20 md:mt-0'>
      <div style={{backgroundImage: `url('https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png')`}} 
        className='relative bg-cover z-[1] bg-center flex flex-wrap'>
          <div className='w-full h-full bg-black absolute z-[-1] opacity-80'>2</div>
          <div className='text-center flex flex-col justify-center items-center gap-y-10 md:h-[40rem] z-[40] py-20 w-[48rem] mx-auto'>
            <h2 className='text-white text-7xl font-bold'>30 years of experiences for give you better <br/>results</h2>
            <button className='bg-red-500 px-20 py-6 text-xl text-white hover:bg-white hover:text-black transition duration-500 font-bold'>Discover More</button>
          </div>
        </div>
    </div>
  )
}

export default Year