import React from 'react'

import Top from "./Bagian/Top"
import Tengah from "./Bagian/Tengah"
import Angka from "./Bagian/Angka"
import Year from "./Bagian/Year"
import Saying from "./Bagian/Saying"

const Visi = () => {
  return (
    <div className='mt-[1rem]'>
        {/*---- TOP ----*/}
        <Top />
        {/*---- Tengah ----*/}
        <Tengah />        
        {/*---- Angka ----*/}   
        <Angka/>
        {/*---- Year ----*/}
        <Year />
        {/*---- Saying ----*/}
        <Saying />
    </div>
  )
}

export default Visi