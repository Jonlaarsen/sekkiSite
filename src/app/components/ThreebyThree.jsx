"use client"
import Image from 'next/image';
import React, { useState } from 'react'
// import { ThreeThree } from '../data/Data'




const ThreebyThree = ({heroVideos}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (video) => {
    setCurrentVideo(video);
    console.log(video.videourl )
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

console.log(heroVideos)    
  return (
    <div className='flex flex-row md:flex-col w-screen h-full justify-center items-center pb-10 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

        {heroVideos.map((item) =>
            (
             <div key={item.id}
                className="relative group bg-black cursor-pointer"
                onClick={() => openModal(item)}
                >
              <div className='relative group bg-black ' key={item.id}>
              
                <img 
                src={item.imgurl}
                // src={`${item.id}GIF.gif`}
                      className="object-cover group-hover:opacity-45 opacity-100 relative group cursor-pointer w-screen md:w-[20rem] lg:w-full 2xl:w-[35rem] h-[12rem] md:h-[12rem] lg:h-[16rem]"
                      alt="" />
                  
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 mx-10 flex justify-center items-center text-center text-4xl uppercase text-white font-semibold">{item.title}</div>
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 mx-10 flex justify-center items-center text-xl  text-white font-nornmal">{item.subtitle}</div>
              </div>
            </div>
            ))}
        </div>
        
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal} // Closes modal when clicking outside
        >
          <div
            className="bg-white rounded-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()} // Prevents close on inside clicks
          >
            
            <iframe controls autoPlay className="w-screen md:w-[60rem] h-[35rem]"
             allow="autoplay"
             src={currentVideo.videourl} type="video/mp4" />
            

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ThreebyThree



