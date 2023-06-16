import React from 'react'
import { MdArrowForwardIos } from "react-icons/md"

const Choose = () => {
  return (
    <div className='h-[100rem]'>
        {/*=== Image ===*/}
        <div className='bg-blue-500 w-[20rem] h-[20rem]'></div>
        {/*=== Text ===*/}
        <div>
            <div>
                <h1>WHY CHOOSE US?</h1>
                <div className='flex flex-row gap-x-4'>
                    <div className='bg-black w-[1rem] h-[0.1rem]'></div>
                    <div className='bg-red-500 w-[4rem] h-[0.1rem]'></div>
                </div>
            </div>
            <p>There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humor</p>
            <p>The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as oppossed to using 'Content here, content here',
                making it look like readable English. Many desktop publishing packages and web page editors now use lorem ipsum as their default model text, 
                and a search for 'lorem ipsum' will uncover many web sites still in their infancy</p>
            <div>
                <p>READ MORE</p>
                <MdArrowForwardIos />
            </div>
        </div>
        {/*=== Icon ===*/}
        <div>
            
        </div>
    </div>
  )
}

export default Choose