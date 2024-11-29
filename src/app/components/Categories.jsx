import React from 'react'

const Categories = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 w-screen h-screen items-center justify-center pb-10'>
      <div className='flex group opacity-60 hover:opacity-100 items-center justify-center w-[15rem]  md:w-[29rem] h-[40rem] bg-gray-700 bg-cover bg-center ' >
          <h1 className='text-5xl opacity-100 group-hover:opacity-0' >Documentary</h1>
      </div>
      <div className='flex group opacity-60 hover:opacity-100 items-center justify-center w-[15rem]  md:w-[29rem] h-[40rem] bg-gray-700 bg-cover bg-center ' >
          <h1 className='text-5xl opacity-100 group-hover:opacity-0' >Brands</h1>
      </div>
      <div className='flex group opacity-60 hover:opacity-100 items-center justify-center w-[15rem]  md:w-[29rem] h-[40rem] bg-gray-700 bg-cover bg-center ' >
          <h1 className='text-5xl opacity-100 group-hover:opacity-0' >Music Videos</h1>
      </div>
    </div>
  )
}

export default Categories
