"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {
  const currentPath = usePathname()

  const links = [
    {name:'Home', path:'/'},
    {name:'Work', path:'/work'},
    {name:"About", path:'/about'}
  ]

  const isActive = (path) =>{
    return currentPath === path
  }


  return (
    <div className='flex h-[5rem] items-center z-20  fixed justify-between top-0 left-0 w-screen  px-4 md:px-8'>
      <div className='text-5xl '>
        <h1 className='text-lg md:text-5xl opacity-55 hover:opacity-100 font-semibold'>Tommy <span className='text-blue-600'>Choi</span> Visuals</h1>
        
      </div>
      <div className='flex text-sm md:text-4xl invisible md:visible  gap-1 md:gap-3'>
        {/* <Link href="/" className='link' >Home</Link>
        <Link href="/work" className='link'>Projects</Link>
        <Link href="/about" className='link'>Contact</Link> */}
        {links.map((link)=>(
          <div key={link.name} className='opacity-55 hover:opacity-100'>
          <Link key={link.name} href={link.path} className={isActive(link.path) ? 'active' : ''} >{link.name}</Link>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Navbar
