import React from 'react'
import { Doc, Featured, Music, ThreeThree } from '../data/Data'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col w-screen py-[10rem]'>
      <div className='flex flex-col pb-11 ' >
        <h1 className='text-4xl pl-10'>Music video</h1>
        <span className='h-[1px] w-screen bg-white mb-11'></span>
        <div className='flex flex-row flex-wrap gap-4 justify-center items-center '>
            {ThreeThree.map((item) =>
            (
                <div className='relative group'>
                <iframe className='group-hover:opacity-45 opacity-100 w-screen h-[15rem]  md:h-[20rem] md:w-[29rem]' src={item.src}></iframe>
                <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-20 flex justify-center items-center text-center text-4xl  text-white font-semibold">{item.title}</div>
                <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl  text-white font-nornmal">{item.subtitle}</div>
            </div>
            ))}
        </div>
      </div>
      <div className='flex flex-col ' >
        <h1 className='text-4xl pl-10'>Documentary</h1>
        <span className='h-[1px] w-screen bg-white mb-11'></span>
        <div className='flex flex-row flex-wrap gap-4 justify-center items-center '>
            {Doc.map((item) =>
            (
                <div className='relative group'>
                    <iframe className='group-hover:opacity-45 opacity-100 w-screen h-[15rem]  md:h-[20rem] md:w-[29rem]' allow="autoplay" src={item.src}></iframe>
                    <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-20 flex justify-center items-center text-center text-4xl  text-white font-semibold">{item.title}</div>
                    <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl  text-white font-nornmal">{item.subtitle}</div>
                </div>
            ))}
        </div>
      </div>
    </div>
    {/* <div className='w-screen'>
        <iframe src="https://geo.dailymotion.com/player.html?video=x99w1kk" ui-controls="false" ui-start-screen-info="false"  className='w-screen h-screen' frameBorder="0"></iframe>
    </div> */}
    </>
  )
}

export default page
