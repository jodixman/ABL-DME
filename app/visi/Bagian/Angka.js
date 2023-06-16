import React from 'react'

function Angka() {
  return (
    <div>
        <div style={{backgroundImage: `url('https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png')`}} 
        className='relative bg-cover z-[1] bg-center flex flex-wrap'>
            <div className='w-full h-full bg-red-500 absolute z-[-1] opacity-90'>2</div>
            <div className='text-center flex flex-col justify-center items-center gap-y-5 md:h-[40rem] z-[40] 
            py-20 w-full mx-auto md:flex-row md:gap-x-[8rem] flex-wrap'>
                {/* 1 */}
                <div className='flex flex-col'>
                    <h2 className='text-white text-[4rem] font-bold'>8705</h2>
                    <h1 className='text-white text-[1rem]'>Project Completed</h1>
                </div>
                {/* 2 */}
                <div className='flex flex-col'>
                    <h2 className='text-white text-[4rem] font-bold'>480</h2>
                    <h1 className='text-white text-[1rem]'>Team Members</h1>
                </div>
                {/* 3 */}
                <div className='flex flex-col'>
                    <h2 className='text-white text-[4rem] font-bold'>6260</h2>
                    <h1 className='text-white text-[1rem]'>Hours Worked</h1>
                </div>
                {/* 4 */}
                <div className='flex flex-col'>
                    <h2 className='text-white text-[4rem] font-bold'>9774</h2>
                    <h1 className='text-white text-[1rem]'>Happy People</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Angka