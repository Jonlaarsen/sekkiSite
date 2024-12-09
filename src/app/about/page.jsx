"use client"
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  //   document.body.style.overflow = "hidden"; // Prevent background scroll
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   document.body.style.overflow = "auto"; // Restore background scroll
  // };

  return (
    <div className="flex flex-col">
      <div
        className="
        flex flex-col top-0 left-0 w-screen h-screen md:h-[40rem]
        bg-cover bg-no-repeat bg-center
        bg-[url('https://images.squarespace-cdn.com/content/v1/63256dcfb1b3af33710daf81/b521df2d-c041-41bb-96cd-f1d49783e92c/Mountain+ollie.jpg?format=2500w')]
      "
      >
        <h1 className="md:ml-7 mt-[10rem] text-xl md:text-4xl">
          ABOUT <span className="text-blue-700">ME</span>
        </h1>
        <p className="md:ml-7 md:mt-3 md:w-[37rem] w-screen text-[0.7rem] md:text-xl">
          Tommy Choi is a cinematographer, editor, and director collaborating
          with production companies, brands, and agencies from Seoul, Korea to
          Los Angeles, California. He is currently based in Seoul Korea,
          working on a variety of projects whether it be his personal visual
          projects, brand marketing videos, music videos, or short form
          documentaries.
        </p>
      </div>
      <div className="flex md:flex-row gap-10 md:gap-0 flex-col w-screen justify-between items-center px-7 md:h-[20rem]">
        <div className=" text-center md:text-left pt-10 md:pt-0">
          <h1 className="text-4xl text-blue-700 md:pb-10">Expertise</h1>
          <div className="text-2xl gap-2 flex flex-col">
            <h2>Visual Aids</h2>
            <h2>Music Videos</h2>
            <h2>Brand Marketing</h2>
            <h2>Documentary</h2>
          </div>
        </div>
        <div >
          <button
            
            className="md:w-[24rem] w-[10rem] p-2 rounded-2xl font-bold text-[0.7rem] md:text-xl text-blue-700 bg-white"
          >
            <Link href="mailto:Tomachoy92@gmail.com">
            LET&apos;S WORK TOGETHER</Link>
          </button>
        </div>
        <div className="md:text-right text-center gap-5 flex flex-col">
          <h1 className="text-4xl text-blue-700 pb-10">Contact</h1>
          <div>
            <h2 className="text-2xl">Email</h2>
            <Link href="mailto:Tomachoy92@gmail.com">Tomachoy92@gmail.com</Link>
          </div>
          <div>
            <h2 className="text-2xl">Phone</h2>
            <Link href="tel:010-9621-3367">(010)-9621-3367</Link>
          </div>
        </div>
      </div>

      {/* Modal
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black text-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white  p-8 relative w-[90%] max-w-[45rem]"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inside clicks
          >
            <h2 className="text-2xl font-bold text-center mb-4">
              Send an Email
            </h2>
            <form
              action="mailto:Tomachoy92@gmail.com"
              method="post"
              encType="text/plain"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                className="p-2 border "
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 border "
                required
              />
              <input
              type="text"
              placeholder="Subject"
              className="p-2 border "
              required
              />
              <textarea
                placeholder="Your Message"
                className="p-2 border h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="p-2 bg-blue-700 text-white font-bold"
              >
                Send
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="mt-2 text-red-500 font-bold"
              >
                Cancel
              </button>
            </form> 
          </div>
        </div>
      )}*/}
    </div>
  );
};

export default Page;
