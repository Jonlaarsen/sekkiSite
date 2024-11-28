import React from 'react'
import { HeroVideo } from '../data/Data'


const Hero = () => {
  return (
    <div className='md:min-h-screen pb-[5rem]  '>
      <div className='flex flex-col items-center gap-8 justify-center'>
         <div key={HeroVideo.id} className=' flex top-0 left-0 w-screen h-screen items-center justify-center '>
          <video src={HeroVideo.src} autoPlay loop muted  allowFullScreen style={{width:"inherit", height:"inherit"}}></video>
        </div>
      </div>
    </div>
  )
}

export default Hero

