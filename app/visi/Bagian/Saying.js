import React from 'react'
import Card from "./Card"

const Saying = () => {
  return (
    <div className='my-20 md:mt-0'>
      <div style={{backgroundImage: `url('https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png')`}} 
        className='relative bg-cover w-full h-full z-[1] bg-center flex flex-wrap'>
          <div className='w-full h-full bg-white absolute z-[-1] opacity-90'></div>
          <div className='text-center flex flex-col justify-center items-center gap-y-10 md:h-[40rem] z-[40] py-20 w-full mx-auto text-black'>
            <h2 className='border-b-2 font-semibold border-red-500 text-lg'>OUR CLIENTS FEEDBACK</h2>
            <h1 className='text-6xl text-black font-bold'>What They're Sayings</h1>
            {/*--- Card *---*/}
            <div className='flex flex-row md:gap-x-10 flex-wrap mt-10 border gap-y-20 justify-center items-center'>
                <Card/>
                <Card />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Saying