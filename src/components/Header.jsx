import React from "react";

const Header = ({ isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="main-area w-full h-full">
      <div className="header dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#620646] to-[#1d1d1d]">
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {/* bg-[#f4dddd] dark:bg-gradient-to-br from-[#1d1d1d]  to-[#9b0b71] */}
          <div className="pt-40 pb-10 min-w-full text-5xl sm:text-7xl font-medium dark:text-white font-lobster text-center text-[#2e2c2e]">
            Jennifer Gajdos-Bomben
          </div>
          {/* <div className="flex flex-wrap"> */}
          <div className="p-5 min-w-full text-xl sm:text-2xl text-black  dark:text-white font-montserrat text-center ">
            Full Stack Developer | Records and Information Manager
          </div>
          <div className="p-5 min-w-full text-md sm:text-lg text-black  dark:text-white text-center">
            Passionate about blending creativity with technical solutions.
          </div>
          {/* </div> */}
        </div>
        {/* <h2 className="text-4xl text-black dark:text-white text-center font-montserrat  py-12">Full Stack Developer </h2> */}
        {/* <br /> */}
        {/* <button className="rounded-sm bg-[#343434] hover:bg-[#e8b9b9] border-solid border-2 border-black font-montserrat  text-white text-xl py-2 px-8 z-1000">
            Contact Me
          </button> */}
        {/* <div className="col-span-1 row-span- md:col-span-2 md:row-span-5">
          <img
            src="/src/assets/websitephoto.png"
            alt="personal-image"
            className="object-cover w-full h-full placeholder:-top-5 md:-top-10"></img>
        </div> */}
        <div className="circles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
