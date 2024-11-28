import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex h-[5rem] items-center z-20 fixed justify-between top-0 left-0 w-screen  px-4 md:px-8'>
      <div className='text-5xl '>
        <h1 className='text-lg md:text-5xl font-bold'>Tommy <span className='text-blue-600'>Choi</span> Visuals</h1>
        
      </div>
      <div className='flex text-sm md:text-2xl invisible md:visible  gap-1 md:gap-3'>
        <Link href="/">Home</Link>
        <Link href="/work">Projects</Link>
        <Link href="/about">Contact</Link>
      </div>
      
    </div>
  )
}

export default Navbar
