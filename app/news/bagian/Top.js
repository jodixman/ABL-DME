import React from 'react'

function Top() {
  return (
    <div className='mt-20 md:mt-0'>
      <div style={{backgroundImage: `url('https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png')`}} 
        className='relative bg-cover z-[1] bg-center flex flex-wrap'>
          <div className='w-full h-full bg-black absolute z-[-1] opacity-60'>2</div>
          <div className='text-center flex flex-col justify-center items-center gap-y-10 md:h-[30rem] z-[40] py-20 w-[48rem] mx-auto'>
            <h2 className='text-red-500 text-3xl font-bold'>Home / Blog Post</h2>
            <h1 className='text-white text-7xl font-bold'>Blog Post</h1>
          </div>
        </div>
    </div>
  )
}

export default Top