import React from 'react'
import BG from "./Hero/Top"
import Product from "./Hero/Product"
import Mid from "./Hero/Mid"
import Choose from "./Hero/Choose"

function page() {
  return (
    <div className='mt-[1rem] z-[-1]'>
      {/*----- Background  -----*/}
      <BG />
      {/*----- OUR Product  -----*/}
      <Product />
      {/*----- OUR Product  -----*/}
      <Mid />
      {/*----- Choose  -----*/}

    </div>
  )
}

export default page