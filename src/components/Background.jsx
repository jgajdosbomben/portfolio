import React from "react";
import { education, work } from "../data";

const Background = () => {
  return (
    <div className="w-full h-full min-h-[100vh]">
      <h1 className="text-black dark:text-white text-3xl text-center font-bold px-10 py-10">Background</h1>
      <div className="flex flex-wrap justify-around pb-10">
        <div className="inline-grid grid-cols-1 grid-rows-6 gap-4 items-center">
          <h2 className="inline text-black dark:text-white text-xl text-center font-bold">Education</h2>
          {education.map((edu, index) => (
            <div className="items-center row-span-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#e3e0e0] duration-300 px-4 py-3 justify-center self-center rounded-md border-2 border-black bg-[#f4dddd]">
              <p className="text-black dark:text-black font-bold text-base">{edu.title}</p>
              <p className="text-black dark:text-black text-base">{edu.date}</p>
              <p className="text-black dark:text-black text-base">{edu.location}</p>
            </div>
          ))}
        </div>
        <div className="inline-grid grid-cols-1 grid-rows-6 gap-4 items-center">
          <h2 className="inline text-black dark:text-white text-xl text-center font-bold">Experience</h2>
          {work.map((work, index) => (
            <div className="items-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#e3e0e0] duration-300 px-4 py-3 rounded-md border-2 border-black bg-[#f4dddd]">
              <p className="text-black dark:text-black font-bold text-base">{work.title}</p>
              <p className="text-black dark:text-black text-base">{work.date}</p>
              <p className="text-black dark:text-black text-base">{work.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Background;
