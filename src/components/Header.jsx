import React from "react";

const Header = ({ isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="main-area w-full h-full">
      <div className="header dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#620646] to-[#1d1d1d]">
        <div className="flex flex-wrap gap-5 text-6xl text-center justify-center items-center">
          {/* bg-[#f4dddd] dark:bg-gradient-to-br from-[#1d1d1d]  to-[#9b0b71] */}
          <div className="pt-40 pb-10 min-w-full text-2xl sm:text-6xl font-medium dark:text-white font-lobster text-center text-[#2e2c2e]">
            Jennifer Gajdos-Bomben
          </div>
          {/* <div className="flex flex-wrap"> */}
          <div className="p-5 min-w-full text-base sm:text-2xl text-black  dark:text-white font-montserrat text-center ">
            Full Stack Developer | Records and Information Manager
          </div>
          <div className="p-5 min-w-full text-base text-md sm:text-lg text-black  dark:text-white text-center">
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
      {/* <div className="col-span-1 md:col-span-3 text-center">
       
      </div> */}

      {/* <h1 className="text-3xl dark:text-white">
            I am a <br />
            <div className="inner-headings dark:text-white">
              <span className="text-black dark:text-white">
                Full Stack Developer <br />
                Front End Developer <br />
                Back End Developer <br />
                Records & Info Manager <br />
                Dancer <br />
                Mother <br />
                Singer <br />
                Pianist <br />
                Full Stack Developer <br />
              </span>
            </div>
          </h1> */}

      {/* <div className="mt-10 flex-gap-10">
            <button className="bg-purple-400 text-lg font-poppins text-black font-semibold rounded-md py-2 px-4">
              Contact Me
            </button>
          </div> */}
      {/* </div> */}
      {/* <div className="w-full flex-1 flex items-center justify-between"> */}
      {/* <div className="w-[300px] h-[400px] md:w-[400px] md:h-[400px]2xl:w-[500px] 2xl:h-[500px] md:mt-20 lg:mt-0 flex flex-col items-start justify-center ml-0 p-4'"> */}
      {/* <h1 className="text-4xl font-semi-bold font-comicneue text-black dark:text-[white]">Full-Stack Developer</h1>
            <p className="flex items-center justify-top font-comicneue text-xl text-black dark:text-[white] mt-5 2xl:mt-10">
              {" "}
              Full-Stack Developer with a passion for blending creativity with technical solutions.
            </p>{" "} */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Header;

{
  /* <img
              src="/src/assets/jenny.jpeg" alt="personal-image"
              className="object-contain w-100% -top-5 md:-top-10 flex-shrink-1 grayscale  rounded-3xl"></img> */
}
