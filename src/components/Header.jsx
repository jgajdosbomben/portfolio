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
            Records and Information Analyst | Aspiring Full Stack Developer
          </div>
          <div className="p-5 min-w-full text-md sm:text-lg text-black  dark:text-white text-center">
            Passionate about blending creativity with technical solutions.
          </div>
          {/* </div> */}
        </div>

        {/* Circles animation div */}
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
