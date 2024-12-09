"use client";
import React, { useEffect, useState } from "react";
import { Catagories, Doc, Music, ThreeThree } from "../data/Data";

const Categories = () => {
  const [category, SetCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [isVertical, setIsVertical] = useState(false);

  
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


  const getContent = () => {
    if (category === "documentary") {
      return Doc;
    } else if (category === "brand") {
      return ThreeThree;
    } else if (category === "music") {
      return Music;
    } else {
      return []; // Return empty array for no content
    }
  };

  const content = getContent();

  return (
    <div className="h-full">
      <div className="flex flex-col md:flex-row gap-4 w-screen h-screen items-center justify-center pb-1 md:pb-10">
        {Catagories.map((item) => (
          <div
            key={item.id}
            onClick={() => SetCategory(item.category)} 
          >
            <div
              id={item.id}
              key={item.id}
              style={{ backgroundImage: `url(${item.thumbnail})` }}
              className="flex group opacity-60 hover:opacity-100 items-center justify-center w-[20rem] bg-red-600 h-[10rem] md:w-[29rem] md:h-[35rem] bg-cover bg-center"
            >
              <h1 className="text-[1rem] md:text-4xl opacity-100 group-hover:opacity-0">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-col w-screen h-full justify-center items-center pb-10">
          <h1 className="text-xl md:text-9xl pb-5">{category}</h1>
          <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
            {content.length > 0 ? (
              content.map((item) => (
                <div
                  key={item.id}
                  className="relative group bg-black cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <video
                    key={item.id}
                    controls={false}
                    poster={item.thumbnail}
                    loop
                    muted={true}
                    className="group-hover:opacity-45 opacity-100 w-screen md:w-[20rem] lg:w-[29rem] 2xl:w-[35rem] h-[12rem] md:h-[12rem] lg:h-auto"
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
              ))
            ) : (
              <p>No content available. Please select a category.</p>
            )}
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
      </div>
    </div>
  );
};

export default Categories;
