"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import VideoActions from "./VideoActions";

const Work = ({ videos, heroVideos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [isVertical, setIsVertical] = useState(false);

  const sortedVideos = videos.sort((a, b) => a.id - b.id);
  const sortedHero = heroVideos.sort((a, b) => a.id - b.id);

  const links = [
    { name: "Brand Films", path: "#main" },
    { name: "Vertical", path: "#vertical" },
    { name: "Docummentary", path: "#doc" },
    { name: "Music Videos", path: "#music" },
  ];

  const openModal = (media) => {
    // Create a copy of the media object to avoid mutating the original
    const processedMedia = { ...media };
    
    // Validate and transform the YouTube URL if applicable
    const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/;
    const isYouTubeLink = youtubeRegex.test(processedMedia.videourl);

    if (isYouTubeLink) {
      const match = processedMedia.videourl.match(youtubeRegex);
      if (match) {
        const videoId = match[3];
        processedMedia.videourl = `https://www.youtube.com/embed/${videoId}`;
      }
    }

    setCurrentMedia(processedMedia);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentMedia(null);
    document.body.style.overflow = "auto"; // Re-enable background scroll
  };

  useEffect(() => {
    if (
      currentMedia &&
      currentMedia.src &&
      !currentMedia.src.includes("youtube.com")
    ) {
      const videoElement = document.createElement("video");
      videoElement.src = currentMedia.src;
      videoElement.onloadedmetadata = () => {
        const aspectRatio = videoElement.videoWidth / videoElement.videoHeight;
        setIsVertical(aspectRatio < 1); // Vertical if width < height
      };
    }
  }, [currentMedia]);

  return (
    <>
      <div className="flex flex-col w-screen gap-10 py-[5rem]">
        <div className="flex justify-evenly pt-[5rem] items-center">
          {links.map((link) => (
            <div key={link.name}>
              <Link href={link.path}>
                <h1 className="md:text-2xl text-[0.7rem] opacity-55 hover:opacity-100">
                  {link.name}
                </h1>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:pt-[3rem]">
          <h1 id="main" className="text-4xl uppercase pb-[3rem] text-center">
            Brand Films
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {sortedVideos
              .filter((item) => item.category === "Brand Film")
              .map((item) => (
                <div
                  key={item.id}
                  className="relative group bg-black cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <div className=" relative group bg-black " key={item.id}>
                    <img
                      src={item.imgurl}
                      loading="lazy"
                      className="object-cover group-hover:opacity-45 relative group cursor-pointer w-screen md:w-[20rem] lg:w-full  h-[12rem] md:h-[12rem] lg:h-[17rem] 2xl:h-[18rem]"
                      alt=""
                    />
                    <div className="opacity-0 px-2 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 flex justify-center items-center text-center text-4xl uppercase text-white font-semibold">
                      {item.title}
                    </div>
                    <div className="opacity-0 px-2 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl  text-white font-nornmal">
                      {item.subtitle}
                    </div>
                    <VideoActions video={item} />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex md:pt-[3rem] flex-col ">
          <h1
            id="vertical"
            className="text-4xl uppercase pb-[3rem] text-center"
          >
            vertical
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {sortedVideos
              .filter((item) => item.category === "vertical")
              .map((item) => (
                <div
                  key={item.id}
                  className="relative group bg-black cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <img
                    src={item.imgurl}
                    className="object-cover group-hover:opacity-45 opacity-100 w-screen md:w-full h-full"
                    alt=""
                  />
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 flex justify-center items-center text-center text-2xl md:text-4xl uppercase text-white font-semibold">
                    {item.title}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl text-white font-normal">
                    {item.subtitle}
                  </div>
                  <VideoActions video={item} />
                </div>
              ))}
          </div>
        </div>

        <div className="flex md:pt-[3rem] flex-col">
          <h1 id="music" className="text-4xl uppercase pb-[3rem] text-center">
            Music Videos
          </h1>
          <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              {sortedVideos
                .filter((item) => item.category === "Music Video")
                .map((item) => (
                  <div
                    key={item.id}
                    className="relative group bg-black cursor-pointer"
                    onClick={() => openModal(item)}
                  >
                    <img
                      src={item.imgurl}
                      className="object-cover group-hover:opacity-45 relative group cursor-pointer w-screen md:w-[20rem] lg:w-full 2xl:w-full h-[12rem] md:h-[12rem] lg:h-[16rem] 2xl:h-[20rem]"
                      alt=""
                    />
                    <div className="opacity-0 px-2 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 flex justify-center items-center text-center text-2xl md:text-4xl uppercase text-white font-semibold">
                      {item.title}
                    </div>
                    <div className="opacity-0 px-2 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl text-white font-normal">
                      {item.subtitle}
                    </div>
                    <VideoActions video={item} />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="flex md:pt-[3rem] flex-col">
          <h1 id="doc" className="text-4xl uppercase pb-[3rem] text-center">
            Documentary
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
            {sortedVideos
              .filter((item) => item.category === "Documentary")
              .map((item) => (
                <div
                  key={item.id}
                  className="relative group bg-black cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <img
                    src={item.imgurl}
                    className="object-cover group-hover:opacity-45 relative group cursor-pointer w-screen md:w-[20rem] lg:w-full 2xl:w-full h-[12rem] md:h-[12rem] lg:h-[16rem] 2xl:h-[20rem]"
                    alt=""
                  />
                  <div className="opacity-0 px-2 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 flex justify-center items-center text-center text-2xl md:text-4xl uppercase text-white font-semibold">
                    {item.title}
                  </div>
                  <div className="opacity-0 px-2 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl text-white font-normal">
                    {item.subtitle}
                  </div>
                  <VideoActions video={item} />
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
              className={`bg-black  relative overflow-hidden ${
                currentMedia.category === "vertical"
                  ? "w-screen md:w-[54vh] h-[90vh] md:h-[95vh] mx-auto"
                  : "w-screen md:w-[90vw] h-[50vh] md:h-[80vh]"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className={`${
                  currentMedia.category === "vertical"
                    ? "w-screen md:w-[54vh] h-[90vh] md:h-[95vh]"
                    : "w-full h-full"
                }`}
                allow="autoplay"
                src={currentMedia.videourl}
                type="video/mp4"
              />

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

//         "use client"
// import React, { useEffect, useState } from "react";
// import { Doc, Music, ThreeThree, Vertical } from "../data/Data";
// import Link from "next/link";

// const Work = ({videos, heroVideos}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentMedia, setCurrentMedia] = useState(null);
//   const [isVertical, setIsVertical] = useState(false);

//   const links = [
//     {name:'Brand Films', path:'#main'},
//     {name:"Music Videos", path:'#music'},
//     {name:'Docummentary', path:'#doc'},
//     {name:'Vertical', path:'#vertical'},
//   ]

//   const openModal = (media) => {
//     setCurrentMedia(media);
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden"; // Prevent background scroll
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setCurrentMedia(null);
//     document.body.style.overflow = "auto"; // Re-enable background scroll
//   };

//   useEffect(() => {
//     if (currentMedia && currentMedia.src && !currentMedia.src.includes("youtube.com")) {
//       const videoElement = document.createElement("video");
//       videoElement.src = currentMedia.src;
//       videoElement.onloadedmetadata = () => {
//         const aspectRatio = videoElement.videoWidth / videoElement.videoHeight;
//         setIsVertical(aspectRatio < 1); // Vertical if width < height
//       };
//     }
//   }, [currentMedia]);

//   console.log(videos)

//   return (
//     <>
//       <div className="flex flex-col w-screen gap-10 py-[5rem]">
//         <div className="flex justify-evenly pt-[5rem] items-center">
//           {links.map((link) =>
//           (
//             <div key={link.name}>
//             <Link  href={link.path}>
//               <h1 className="md:text-2xl text-[0.7rem] opacity-55 hover:opacity-100">{link.name}</h1>
//             </Link>
//             </div>
//           )
//           )}
//         </div>
//         <div className="flex flex-col pb-11">
//           <h1 id="main" className="text-4xl uppercase pb-[3rem] text-center">Brand Films</h1>
// //           <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
//           {heroVideos.map((item) =>
//             (
//              <div key={item.id}
//                 className="relative group bg-black cursor-pointer"
//                 onClick={() => openModal(item)}
//                 >
//               <div className='relative group bg-black ' key={item.id}>
//                 <img src={item.imgurl}
//                 className='group-hover:opacity-45 opacity-100  w-screen md:w-full h-auto'
//                 alt="" />
//                   <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 flex justify-center items-center text-center text-4xl uppercase text-white font-semibold">{item.title}</div>
//                   <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl  text-white font-nornmal">{item.subtitle}</div>
//               </div>
//             </div>
//             ))}
//           </div>
//         </div>

//       <div className='flex flex-col ' >
//         <h1 id="vertical" className='text-4xl pl-10'>Vertical</h1>
//         <span className='h-[1px] w-screen bg-white mb-11'></span>
//         <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
//         {videos
//           .filter((item) => item.category === "vertical")
//           .map((item) => (
//             <div
//               key={item.id}
//               className="relative group bg-black cursor-pointer"
//               onClick={() => openModal(item)}
//             >
//               <img
//                 src={item.imgurl}
//                 className="group-hover:opacity-45 opacity-100 w-screen md:w-full h-auto"
//                 alt=""
//               />
//               <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 flex justify-center items-center text-center text-2xl md:text-4xl uppercase text-white font-semibold">
//                 {item.title}
//               </div>
//               <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl text-white font-normal">
//                 {item.subtitle}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col">
//             <h1 id="music" className="text-4xl uppercase pb-[3rem] text-center">Music Videos</h1>
//   //             <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
//             <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
//               {videos
//                 .filter((item) => item.category === "Music Video")
//                 .map((item) => (
//                   <div
//                     key={item.id}
//                     className="relative group bg-black cursor-pointer"
//                     onClick={() => openModal(item)}
//                   >
//                     <img
//                       src={item.imgurl}
//                       className="group-hover:opacity-45 opacity-100 w-screen md:w-full h-auto"
//                       alt=""
//                     />
//                     <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 flex justify-center items-center text-center text-2xl md:text-4xl uppercase text-white font-semibold">
//                       {item.title}
//                     </div>
//                     <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl text-white font-normal">
//                       {item.subtitle}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <h1 id="doc" className="text-4xl uppercase pb-[3rem] text-center">Documentary</h1>
//   //             <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
//               {videos
//                 .filter((item) => item.category === "Music Video")
//                 .map((item) => (
//                   <div
//                     key={item.id}
//                     className="relative group bg-black cursor-pointer"
//                     onClick={() => openModal(item)}
//                   >
//                     <img
//                       src={item.imgurl}
//                       className="relative group cursor-pointer w-screen md:w-[20rem] lg:w-[29rem] 2xl:w-[35rem] h-[12rem] md:h-[12rem] lg:h-[rem]"
//                       alt=""
//                     />
//                     <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-10 flex justify-center items-center text-center text-2xl md:text-4xl uppercase text-white font-semibold">
//                       {item.title}
//                     </div>
//                     <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-40 flex justify-center items-center text-xl text-white font-normal">
//                       {item.subtitle}
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>

//           {isModalOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
//           onClick={closeModal} // Closes modal when clicking outside
//         >
//           <div
//             className="bg-white rounded-lg overflow-hidden relative"
//             onClick={(e) => e.stopPropagation()} // Prevents close on inside clicks
//           >

//             <iframe controls autoPlay className="w-screen md:w-[60rem] h-[35rem]"
//              allow="autoplay"
//              src={currentMedia.videourl} type="video/mp4" />

//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white text-3xl font-bold"
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//         </div>
//         </>
//         );
//         };

//         export default Work;

// {isModalOpen && currentMedia && (
//   <div
//     className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
//     onClick={closeModal}
//   >
//     <div
//       className={`bg-black rounded-lg relative overflow-hidden ${
//         isVertical ? "w-[90vw] h-[90vh]" : "w-[90vw] max-h-[90vh]"
//       }`}
//       onClick={(e) => e.stopPropagation()}
//     >
//       {currentMedia.src.includes("youtube.com") ? (
//         <iframe
//           src={currentMedia.src}
//           className="w-screen h-[20rem] md:h-[50rem]"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       ) : (
//         <video controls autoPlay className="w-full h-full">
//           <source src={currentMedia.src} type="video/mp4" />
//         </video>
//       )}
//       <button
//         onClick={closeModal}
//         className="absolute top-4 right-4 text-white text-2xl font-bold"
//       >
//         &times;
//       </button>
//     </div>
//   </div>
// )}
