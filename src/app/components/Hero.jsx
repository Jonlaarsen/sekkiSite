"use client";
import React, { useState } from "react";
import { HeroVideo } from "../data/Data";

const Hero = () => {
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
    <div className="md:min-h-screen pb-[5rem] relative">
     

      <div className="flex flex-col items-center gap-8 justify-center">
        <div
          key={HeroVideo.id}
          className="flex top-0 left-0 h-[100vh] w-auto md:w-screen md:h-screen items-center justify-center"
          onClick={() => openModal(HeroVideo)}
        >
          <video
            rel="preload"
            src={HeroVideo.src}
            playsInline
            autoPlay
            loop
            muted = {true}
            className="w-screen h-screen object-cover"
          ></video>
          {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal} // Closes modal when clicking outside
        >
          <div
            className="bg-white rounded-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()} // Prevents close on inside clicks
          >
            <video controls autoPlay className="w-screen md:w-[70rem] h-auto">
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
      </div>
    </div>
  );
};

export default Hero;
