import React from 'react'
import { Catagories } from '../data/Data'

const Categories = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 w-screen h-screen items-center justify-center pb-10'>
      {/* <div className='flex group opacity-60 hover:opacity-100 items-center justify-center w-[15rem]  md:w-[29rem] h-[40rem] bg-gray-700 bg-cover bg-center ' >
          <h1 className='text-5xl opacity-100 group-hover:opacity-0' >Documentary</h1>
      </div>
      <div className='flex group opacity-60 hover:opacity-100 items-center justify-center w-[15rem]  md:w-[29rem] h-[40rem] bg-gray-700 bg-cover bg-center ' >
          <h1 className='text-5xl opacity-100 group-hover:opacity-0' >Brands</h1>
      </div>
      <div className='flex group opacity-60 hover:opacity-100 items-center justify-center w-[15rem]  md:w-[29rem] h-[40rem] bg-gray-700 bg-cover bg-center ' >
          <h1 className='text-5xl opacity-100 group-hover:opacity-0' >Music Videos</h1>
      </div> */}
      {Catagories.map((item) =>
      (
        <>
        <div id={item.id} key={item.id}
          style={{ backgroundImage: `url(${item.thumbnail})` }} 
          className='flex group opacity-60 hover:opacity-100 items-center justify-center w-[20rem] bg-red-600 md:w-[29rem] h-[40rem] bg-cover bg-center ' >
          <h1 className=' text-[1rem] md:text-4xl opacity-100 group-hover:opacity-0' >{item.title}</h1>
          
        </div>
        </>
      ))}
    </div>
  )
}

export default Categories
