import React from 'react'

const Footer = () => {
  return (
    <div className='flex text-[0.7rem] md:text-3xl justify-evenly items-center h-[20rem] bg-black bottom-0 left-0 w-screen'>
      <a href='https://www.instagram.com/sekkishots'><img className='h-[1rem] md:h-[3rem]' src='/insta.png' alt='insta'/></a>
      <div>TOMMY CHOI VISUALS</div>
      <a href='https://vimeo.com/user4926582'><img className='h-[1rem] md:h-[3rem]' src='/vimeo.png' alt='vimeo'/></a>
    </div>
  )
}

export default Footer
