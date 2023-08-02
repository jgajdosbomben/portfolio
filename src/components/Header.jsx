import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20">
      {/* <div className="flex flex-col mb-20 lg:mb-0"> */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mb-20 lg:mb-0 pr-40">
          <h1 className="text-6xl font-pacifico  text-black dark:text-[white]">Jennifer Gajdos-Bomben</h1>
          <br />
          {/* <span className="text-4xl font-semi-bold text-black dark:text-[white]">Full-Stack Developer</span> */}

       

          <div className="mt-10 flex-gap-10">
            <button className="bg-purple-400 text-lg font-poppins text-black font-semibold rounded-md py-2 px-4">Contact Me</button>
          </div>
        </div>
        <div className='w-full flex-1 flex items-center justify-between border-s-4 border-black'>
          <div className="w-[300px] h-[400px] md:w-[400px] md:h-[400px]2xl:w-[500px] 2xl:h-[500px] md:mt-20 lg:mt-0 flex flex-row items-start justify-center ml-20 p-4'">
          <h1 className="text-4xl font-semi-bold font-comicneue text-black dark:text-[white]">Full-Stack Developer</h1>
              <p className="flex items-center justify-top font-comicneue text-xl text-black dark:text-[white] mt-5 2xl:mt-10">
            {" "}
            Full-Stack Web Developer with a a passion for blending creativity with technical solutions.
          </p> {/* <img
              src="/src/assets/jenny.jpeg" alt="personal-image"
              className="object-contain w-100% -top-5 md:-top-10 flex-shrink-1 grayscale  rounded-3xl"></img> */}
                   </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
