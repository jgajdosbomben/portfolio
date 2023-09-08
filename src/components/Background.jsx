import React from "react";
import { education, work } from "../data";

const Background = () => {
  return (
    <div className="w-full h-full min-h-[100vh]">
      <h1 className="text-black dark:text-white text-3xl text-center font-bold px-10 py-10">Background</h1>
      <div className="grid grid-cols-1 grid-rows-9 md:grid-cols-7 md:grid-rows-6 gap-2 items-center">
        <div className="col-span-1 row-span-1 md:col-start-2 md:col-end-4 md:row-span-2">
          {education.map((edu, index) => (
            <div className="col-span-2 row-span-2 gap-2 h-full items-center px-4 py-3 rounded-md bg-[#f4dddd]">
              <p className="text-black dark:text-black text-sm">{edu.title}</p>
              <p className="text-black dark:text-black text-sm">{edu.date}</p>
              <p className="text-black dark:text-black text-sm">{edu.location}</p>
            </div>
          ))}
        </div>
        <div className="col-span-1 row-span-1 md:col-start-5 md:col-end-7 md:row-span-3">
          <div className="col-span-2 gap-2 h-full items-center px-4 py-3 rounded-md bg-[#f4dddd]">
            {work.map((work, index) => (
              <div className="grid col-span-2 gap-2 h-full items-center px-4 py-3 rounded-md bg-[#f4dddd]">
                <p className="text-black dark:text-black text-sm">{work.title}</p>
                <p className="text-black dark:text-black text-sm">{work.date}</p>
                <p className="text-black dark:text-black text-sm">{work.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
