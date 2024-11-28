import React from 'react'
import { Documentary, Music } from '../data/Data'

const Work = () => {
  return (
    <div className=' flex flex-col items-center mt-10 md:gap-10'>
      <div>
        <h1 className='text-xl md:text-5xl font-bold'>Music Videos</h1>
      </div>
      <div className='flex flex-row flex-nowrap gap-10 items-center overflow-x-scroll w-screen md:w-[80rem]  '>
        {Music.map((item) =>
        (
            <div key={item.id} id={item.id} 
            className=' w-screen h-[15rem] transition rounded ease-in-out delay-150 hover:scale-110  md:h-[25rem] md:w-[40rem]'>
            <iframe src={item.src} style={{width:"inherit" ,height:"inherit", }}></iframe>
            </div>
        )
        )}
      </div>
      <div>
        <h1 className='text-xl md:text-5xl font-bold'>Documentary</h1>
      </div>
      <div className='flex flex-row flex-nowrap gap-10 items-center overflow-x-scroll w-screen md:w-[80rem]  '>
        {Documentary.map((item) =>
        (
            <div key={item.id} id={item.id} 
            className=' w-screen h-[15rem] transition rounded ease-in-out delay-150 hover:scale-110  md:h-[25rem] md:w-[40rem]'>
            <iframe src={item.src} style={{width:"inherit" ,height:"inherit", }}></iframe>
            </div>
        )
        )}
      </div>
    </div>
  )
}

export default Work
