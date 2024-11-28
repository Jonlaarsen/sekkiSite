"use client"
import Link from 'next/link'
import React from 'react'
import { Doc, ThreeThree, Vertical } from '../data/Data'


const Work = () => {

  const handleMouseEnter = (e) => {
    const vid = e.target
    vid.play()
 }
  const handleMouseLeave = (e) => {
    const vid = e.target
    vid.pause()
  }
  
  return (
    <>
    
    <div className='flex flex-col w-screen py-[10rem]'>
      <div className='flex flex-col pb-11 ' >
        <h1 className='text-4xl pl-10'>Main Reels</h1>
        <span className='h-[1px] w-screen bg-white mb-11'></span>
        <div className='flex flex-row flex-wrap gap-4 justify-center items-center '>
            {ThreeThree.map((item) =>
            (
              <Link
              href={{
                pathname:`post/${item.id}`,
                query: item.id
              }}
              key={item.id}
            >
              <div className='relative group bg-black ' key={item.id}>
                  <video key={item.id}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  controls={false}
                  currenttime={1}
                  poster={item.thumbnail}
                  loop
                  muted={true}
                  className='group-hover:opacity-45 opacity-100  w-screen md:w-[20rem] lg:w-[29rem] 2xl:w-[35rem] h-[12rem] md:h-[12rem] lg:h-auto' >
                      <source src={item.src} type='video/mp4' />
                  </video>
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 flex justify-center items-center text-center text-4xl uppercase text-white font-semibold">{item.title}</div>
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl  text-white font-nornmal">{item.subtitle}</div>
              </div>
            </Link>
            ))}
        </div>
      </div>
      <div className='flex flex-col ' >
        <h1 className='text-4xl pl-10'>Vertical</h1>
        <span className='h-[1px] w-screen bg-white mb-11'></span>
        <div className='flex flex-row flex-wrap gap-4 justify-center items-center '>
            {Vertical.map((item) =>
            (
              <Link
              href={{
                pathname:`post/${item.id}`,
                query: item.id
              }}
              key={item.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
             >
              <div className='relative group bg-black ' key={item.id}>
                  <video key={item.id}
                  // autoPlay
                  loop
                  muted
                  className='group-hover:opacity-45 opacity-100  w-screen md:w-[20rem] lg:w-[29rem] 2xl:w-[35rem] h-[12rem] md:h-[12rem] lg:h-[50rem]' >
                      <source src={item.src} type='video/mp4' />
                  </video>
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-center text-4xl uppercase text-white font-semibold">{item.title}</div>
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-60 flex justify-center items-center text-xl  text-white font-nornmal">{item.subtitle}</div>    
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className='flex flex-col ' >
        <h1 className='text-4xl pl-10'>Documentary</h1>
        <span className='h-[1px] w-screen bg-white mb-11'></span>
        <div className='flex flex-row flex-wrap gap-4 justify-center items-center '>
            {Doc.map((item) =>
            (
              <Link
                href={{
                  pathname:`post/${item.id}`,
                  query: item.id
                }}
                key={item.id}
              >
              <div className='relative group bg-black ' key={item.id}>
                  <video key={item.id}
                  // autoPlay
                  loop 
                  muted
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className='group-hover:opacity-45 opacity-100  w-screen md:w-[20rem] lg:w-[29rem] 2xl:w-[35rem] h-[12rem] md:h-[12rem] lg:h-auto' >
                      <source src={item.src} type='video/mp4' />
                  </video>
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 flex justify-center items-center text-center text-4xl uppercase text-white font-semibold">{item.title}</div>
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl  text-white font-nornmal">{item.subtitle}</div>    
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Work
