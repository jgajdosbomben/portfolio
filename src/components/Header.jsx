import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-start content-start justify-between ">
      {/* <div className="flex flex-col mb-20 lg:mb-0"> */}
      <div className="flex flex-row justify-around items-center">
        {/* <div className=""> */}
        <div className="flex">
          <h1 className="flex-grow text-6xl font-montserrat  text-black dark:text-white">Jennifer Gajdos-Bomben</h1>
          </div>
          <div className="flex">
          <img
          src="/src/assets/JGB.png"
          alt="personal-image"
          className="object-cover w-full h-full placeholder:-top-5 md:-top-10"></img> 
          </div>
          {/* <br /> */}
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
    </div>
  );
};

export default Header;

{
  /* <img
              src="/src/assets/jenny.jpeg" alt="personal-image"
              className="object-contain w-100% -top-5 md:-top-10 flex-shrink-1 grayscale  rounded-3xl"></img> */
}
