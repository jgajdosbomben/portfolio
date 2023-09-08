import React from "react";

const About = () => {
  return (
    <div className="w-full px-10 py-10">
      <h1 className="text-3xl font-bold text-white text-center dark:text-white pb-10 ">About Me</h1>
      <div className="w-full grid grid-cols-1 grid-row-3 gap-10 md:grid-cols-6 md:grid-rows-2 justify-center items-center">
        <div className="col-span-1 row-span-1 sm:col-span-2 md:row-span-2">
          <img
            src="../websitephoto.png"
            alt="personal-image"
            className="object-cover w-100% h-100% placeholder:-top-5 md:-top-10 rounded-full"></img>
        </div>
        <div className="col-span-1 row-span-1 md:col-start-3 md:col-end-7 md:row-span-2 self-center justify-start">
          <p className="text-xl text-white dark:text-white leading-8">
            After years of searching for a career where I could combine my creative and logical/mathematical sides, I have finally
            found an opportunity in full stack development. I recently pivoted from my thirteen year career in records and
            information management and as a new graduate from InceptionU’s Full Stack Developer program, I am eager to build
            intuitive, functional, and beautiful applications that are user-friendly and can enhance people's daily lives.{" "}
          </p>
          <br />
          <p className="text-xl text-white dark:text-white leading-8">
            Drawing from my background and love of mathematics, I enjoy using my problem solving and analysis abilities to help
            deliver business solutions that increase efficiency and improve operations. I am extremely self-disciplined and
            utilize my attention to detail, and communication skills to consistently deliver outstanding results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
