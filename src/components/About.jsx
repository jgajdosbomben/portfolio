import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-col px-8 md:px-10 gap-10 lg:gap-20 lg:py-20 ">
      <div className="w-full h-full bg-cover bg-center">
        {/* <div className="bg"></div> */}
        <div className="w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md">
        <img
          src="/src/assets/jenny.jpeg"
          alt="personal-image"
          className="object-cover w-full h-full placeholder:-top-5 md:-top-10 flex-shrink-1 grayscale  rounded-3xl"></img>
        {/* <img
        src="/src/assets/jenny.jpeg"
        className="h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125"
      /> */}
        </div>
      <div className="w-full flex flex-col">
        <p className="text-3xl font-bold text-black dark:text-white  ">About Me</p>
        <p className="text-lg text-black dark:text-white leading-10">I have recently completed a full stack developer program. </p>
      </div>
      </div>
    </div>
  );
};

export default About;
