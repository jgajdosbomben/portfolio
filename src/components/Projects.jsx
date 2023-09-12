import React, { useState } from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="bg-[#343434] dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#28031e] to-[#1d1d1d] font-montserrat text-white dark:text-white px-1 py-1 md:px-10 md:py-10">
      <div className="flex justify-center items-center">
        <h1 className="text-5xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-rose-400 to-purple-800 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-rose-300 to-purple-800">Projects</h1>
      </div>

      <div className="grid grid-cols-2 gap-2 items-center justify-center p-10 lg:grid-cols-4 md:gap-4 pt-10">
        {projects.map((proj, index) => (
          <div className="grid col-span-2 gap-2 h-full items-center px-4 py-3 rounded-md bg-[#f4dddd] dark:bg-[#e1aabb]">
            <button
              onClick={() => {
                window.open(proj.url, "_blank");
              }}>
              <p className="text-black dark:text-black text-2xl font-bold">{proj.name}</p>
              <a
                href={proj.url}
                className="text-black dark:text-black text-lg hover:underline decoration-wavy">
                {proj.url}
              </a>
              <p className="text-black dark:text-black text-sm">{proj.description}</p>
              <img
                src={proj.img}
                className="w-70 h-50 justify-end"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
