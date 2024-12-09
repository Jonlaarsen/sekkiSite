"use client"
import React, { useState, useEffect } from 'react';
import { Doc } from '../data/Data';


const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
 
  const openModal = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };


  return (
    <div className='flex pt-[10rem] flex-row md:flex-col w-screen h-full justify-center items-center pb-10'>
      <div className='flex flex-row gap-4 flex-wrap items-center justify-center'>
        {Doc.map((item) => (
          <div key={item.id} className="relative group bg-black cursor-pointer" onClick={() => openModal(item)}>
            <div className='relative group bg-black '>
              <video
                key={item.id}
                controls={false}
                poster={item.thumbnail}
                loop
                muted={true}
                className='group-hover:opacity-45 opacity-100  w-screen h-auto'>
                <source src={item.src} type='video/mp4' />
              </video>
              <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 flex justify-center items-center text-center text-4xl uppercase text-white font-semibold">
                {item.title}
              </div>
              <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl text-white font-normal">
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal} // Closes modal when clicking outside
        >
          <div
            className="bg-white rounded-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()} // Prevents close on inside clicks
          >
            <video controls autoPlay className="w-screen md:w-[50rem] h-auto">
              <source src={currentVideo.src} type="video/mp4" />
            </video>
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
  );
};

export default Page;
