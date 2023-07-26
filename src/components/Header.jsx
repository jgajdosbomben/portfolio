import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20">
      <div className="flex flex-col mb-20 lg:mb-0">
        <span className="text-lg font-bold text-pink-600">Full-Stack Developer</span>
        <div className="flex gap-4 items-center my-4">
          <h1> I am a </h1>
          <div className="flex items-center justify-center text-white shadow-lg bg-pink-800 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full">
            <p className="text-3xl 2xl:text-5xl font-bold px-5 py-2 pb-2 text-center">Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
