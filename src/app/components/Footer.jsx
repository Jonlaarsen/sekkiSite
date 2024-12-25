import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' flex flex-col items-center justify-center h-[15rem] bg-black bottom-0 left-0 w-screen'>
      <div className='flex text-[0.7rem] md:text-3xl justify-evenly items-center w-screen pb-[4rem]'>
        <a href='https://www.instagram.com/sekkishots'><img className='h-[1rem] md:h-[3rem]' src='/insta.png' alt='insta'/></a>
        <div>TOMMY CHOI VISUALS</div>
        <a href='https://vimeo.com/user4926582'><img className='h-[1rem] md:h-[3rem]' src='/vimeo.png' alt='vimeo'/></a>
      </div>
      <div className='text-[0.9rem] opacity-20 hover:opacity-50 '>
        <Link href='mailto:jontoftdallarsen@icloud.com'> Website made By : JLstudios</Link>
      </div>
    </div>
    
  )
}

export default Footer
