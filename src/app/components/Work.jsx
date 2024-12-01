"use client"
import React, { useEffect, useState } from "react";
import { Doc, Music, ThreeThree, Vertical } from "../data/Data";
import Link from "next/link";

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [isVertical, setIsVertical] = useState(false);

  const links = [
    {name:'Main reels', path:'main'},
    {name:'Vertical', path:'#vertical'},
    {name:"Music Videos", path:'#music'},
    {name:'Docummentary', path:'#doc'}
  ]

  const openModal = (media) => {
    setCurrentMedia(media);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentMedia(null);
    document.body.style.overflow = "auto"; // Re-enable background scroll
  };

  // Check the aspect ratio of the video when the modal opens
  useEffect(() => {
    if (currentMedia && currentMedia.src && !currentMedia.src.includes("youtube.com")) {
      const videoElement = document.createElement("video");
      videoElement.src = currentMedia.src;
      videoElement.onloadedmetadata = () => {
        const aspectRatio = videoElement.videoWidth / videoElement.videoHeight;
        setIsVertical(aspectRatio < 1); // Vertical if width < height
      };
    }
  }, [currentMedia]);


  const handleMouseEnter = (e) => {
    const vid = e.target;
    vid.play();
  };

  const handleMouseLeave = (e) => {
    const vid = e.target;
    vid.pause();
  };

  return (
    <>
      <div className="flex flex-col w-screen gap-10 py-[10rem]">
        <div className="flex justify-evenly items-center">
          {links.map((link) =>
          (
            <>
            <Link key={link.name} href={link.path}>
              <h1 className="md:text-2xl">{link.name}</h1>
            </Link>
            </>
          )
          )}
        </div>
        <div className="flex flex-col pb-11">
          <h1 id="main" className="text-4xl pl-10">Main Reels</h1>
          <span className="h-[1px] w-screen bg-white mb-11"></span>
          <div  className="flex flex-row flex-wrap gap-2 justify-center items-center">
            {ThreeThree.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <video
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  controls={false}
                  poster={item.thumbnail}
                  loop
                  muted
                  className="group-hover:opacity-45 opacity-100 w-screen object-cover md:w-[20rem] lg:w-[29rem] 2xl:w-[35rem] h-[12rem] md:h-[12rem] lg:h-auto"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
                <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 flex justify-center items-center text-center text-4xl uppercase text-white font-semibold">
                  {item.title}
                </div>
                <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl text-white font-normal">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className='flex flex-col ' >
        <h1 id="vertical" className='text-4xl pl-10'>Vertical</h1>
        <span className='h-[1px] w-screen bg-white mb-11'></span>
        <div  className='flex flex-row flex-wrap gap-4 justify-center items-center '>
            {Vertical.map((item) =>
            (
              <div key={item.id}
                className="relative group bg-black cursor-pointer"
                onClick={() => openModal(item)}
                >
                  <video key={item.id}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  controls={false}
                  currenttime={1}
                  poster={item.thumbnail}
                  loop
                  muted={true}
                  className='group-hover:opacity-45 opacity-100  w-screen md:w-[20rem] lg:w-[29rem] 2xl:w-[35rem] h-screen object-cover md:h-[12rem] lg:h-auto' >
                      <source src={item.src} type='video/mp4' />
                  </video>
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 flex justify-center items-center text-center text-4xl uppercase text-white font-semibold">{item.title}</div>
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl  text-white font-nornmal">{item.subtitle}</div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col">
          <h1 id="music" className="text-4xl pl-10">Music Videos</h1>
          <span className="h-[1px] w-screen bg-white mb-11"></span>
          <div  className="flex flex-row flex-wrap gap-4 justify-center items-center">
            {Music.map((item) => (
              <div
                key={item.id}
                className="relative group bg-black cursor-pointer"
                onClick={() => openModal(item)}
              >
                <iframe
                  src={item.src}
                  className="group-hover:opacity-45 opacity-100 w-screen md:w-[20rem] lg:w-[29rem] 2xl:w-[35rem] h-[12rem] md:h-[12rem] lg:h-[20rem]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="opacity-0 h-inherit group-hover:opacity-100 duration-300 absolute inset-x-0 top-20 flex justify-center items-center text-center text-4xl uppercase text-white font-semibold">
                  {item.title}
                </div>
                <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-[12rem] flex justify-center items-center text-xl text-white font-normal">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className="flex flex-col">
          <h1 id="doc" className="text-4xl pl-10">Documentary</h1>
          <span className="h-[1px] w-screen bg-white mb-11"></span>
          <div  className="flex flex-row flex-wrap gap-4 justify-center items-center">
            {Doc.map((item) => (
              <div
                key={item.id}
                className="relative group bg-black cursor-pointer"
                onClick={() => openModal(item)}
              >
                <iframe
                  src={item.src}
                  className="group-hover:opacity-45 opacity-100 w-screen md:w-[20rem] lg:w-[29rem] 2xl:w-[35rem] h-[12rem] md:h-[12rem] lg:h-[20rem]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="opacity-0 h-inherit group-hover:opacity-100 duration-300 absolute inset-x-0 top-20 flex justify-center items-center text-center text-4xl uppercase text-white font-semibold">
                  {item.title}
                </div>
                <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-[12rem] flex justify-center items-center text-xl text-white font-normal">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
            
        {isModalOpen && currentMedia && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className={`bg-black rounded-lg relative overflow-hidden ${
                isVertical ? "w-[90vw] h-[90vh]" : "w-[90vw] max-h-[90vh]"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {currentMedia.src.includes("youtube.com") ? (
                <iframe
                  src={currentMedia.src}
                  className="w-screen h-[20rem] md:h-[50rem]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video controls autoPlay className="w-full h-full">
                  <source src={currentMedia.src} type="video/mp4" />
                </video>
              )}
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
        </>
        );
        };

        export default Work;