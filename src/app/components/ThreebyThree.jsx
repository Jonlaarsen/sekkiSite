import React from 'react'
import { ThreeThree } from '../data/Data'
import Link from 'next/link'



const ThreebyThree = () => {

    
  return (
    <div className='flex flex-row md:flex-col w-screen h-full justify-center items-center pb-10 '>
        <div className='flex flex-row gap-4 flex-wrap items-center justify-center'>

        {ThreeThree.map((item) =>(
            // <Link 
            // href={`/post/${item.slug}`}
            // item={item}
            // >
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
                className='group-hover:opacity-45 opacity-100  w-screen md:w-[20rem] lg:w-[29rem] 2xl:w-[35rem] h-[12rem] md:h-[12rem] lg:h-auto' >
                    <source src={item.src} type='video/mp4' />
                </video>
                <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-20 flex justify-center items-center text-center text-4xl uppercase text-white font-semibold">{item.title}</div>
                <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl  text-white font-nornmal">{item.subtitle}</div>
                
            </div>
            </Link>
        ))}

        </div>    
    </div>
  )
}

export default ThreebyThree


{/* <div className='flex flex-row gap-5'>
{Documentary.map((item) =>(
    <div className='relative group w-[10rem] md:w-[20rem] lg:w-[27rem] 2xl:w-[35rem] h-[5rem] md:h-[10rem] lg:h-[17rem] ' key={item.id}>
        <iframe src={item.src} className='group-hover:opacity-25 opacity-100' title='YO' style={{width:"inherit", height:"inherit"}}></iframe>
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-20 flex justify-center items-center text-4xl  text-white font-semibold">{item.title}</div>
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl  text-white font-nornmal">{item.subtitle}</div>


        <div className='opacity-0 gr'></div>
    </div>
))}
</div>
<div className='flex flex-row gap-5'>
{Documentary.map((item) =>(
    <div className='relative group w-[10rem] md:w-[20rem] lg:w-[27rem] 2xl:w-[35rem] h-[5rem] md:h-[10rem] lg:h-[17rem] ' key={item.id}>
        <iframe src={item.src} className='group-hover:opacity-45 opacity-100' title='YO' style={{width:"inherit", height:"inherit"}}></iframe>
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-20 flex justify-center items-center text-4xl  text-white font-semibold">{item.title}</div>
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl  text-white font-nornmal">{item.subtitle}</div>

    </div>
))}
</div> */}
