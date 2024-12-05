"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {
  const currentPath = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: "About", path: '/about' }
  ]

  const isActive = (path) => {
    return currentPath === path
  }

  return (
    <div className='flex h-[5rem] items-center z-20 fixed justify-between top-0 left-0 w-screen px-4 md:px-8 shadow'>
      {/* Logo */}
      <div className='text-5xl'>
        <h1 className='text-lg md:text-5xl opacity-55 hover:opacity-100 font-semibold'>
          Tommy <span className='text-blue-600'>Choi</span> Visuals
        </h1>
      </div>

      {/* Desktop Links */}
      <div className='hidden md:flex text-sm md:text-4xl gap-1 md:gap-3'>
        {links.map((link) => (
          <div key={link.name} className='opacity-55 hover:opacity-100'>
            <Link href={link.path} className={isActive(link.path) ? 'active' : ''}>{link.name}</Link>
          </div>
        ))}
      </div>

      {/* Hamburger Menu Icon */}
      <div className='md:hidden flex items-center'>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className='focus:outline-none z-30'
        >
          <span className={`block w-8 h-1 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-8 h-1 bg-white my-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-1 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center'>
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              onClick={() => setMenuOpen(false)} // Close menu on click
              className='text-white text-3xl my-4 hover:text-blue-400 transition'
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
