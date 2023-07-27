import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20">
      <div className="flex flex-col mb-20 lg:mb-0">
        <h1 className="text-5xl font-bold text-black dark:text-[white]">Jennifer Gajdos-Bomben</h1>
        <br />
        <span className="text-4xl font-semi-bold text-black dark:text-[white]">Full-Stack Developer</span>
        <div className="flex gap-4 items-center my-4">
          <div className="flex items-center justify-center text-black dark:text-[white]">
          <p> Full-Stack Web Developer with a a passion for blending creativity with technical solutions.  </p>
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
