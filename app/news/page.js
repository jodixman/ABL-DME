import React from 'react'
import Top from "./bagian/Top"
import Card from "./bagian/Card"

const page = () => {
  return (
    <div>
        {/*--- Top ---*/}
        <Top />
        <div className=' w-full max-h-screnn py-20 flex flex-wrap'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto border shadow-xl py-10 w-[90rem] gap-y-10 hover:shadow-2xl transition duration-400'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>
  )
}

export default page