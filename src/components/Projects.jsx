import React, { useState } from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="bg-[#343434] dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#28031e] to-[#1d1d1d] font-montserrat text-white dark:text-white p-10">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl sm:text-5xl text-white font-bold text-center pb-1">Projects</h1>
      </div>

      <div className="grid grid-cols-2 gap-5 items-center justify-center p-10 lg:grid-cols-4 md:gap-4 pt-10">
        {projects.map((proj, index) => (
          <div
            key={proj.id}
            className="grid col-span-2 gap-3 h-full items-center text-center text-md px-4 py-3 rounded-md bg-[#f4dddd] dark:bg-[#e1aabb]">
            <div className="flex justify-center">
              <div>
                <p className="text-black dark:text-black text-2xl font-bold">{proj.name}</p>
              </div>
            </div>
            <div>
              <a
                href={proj.url}
                className="text-black dark:text-black text-xs sm:text-md hover:underline decoration-wavy decoration-[#620646] ">
                {proj.url}
              </a>
            </div>
            <div>
              <p className="text-black text-sm sm:text-md dark:text-black text-justify">{proj.description}</p>
            </div>
            <div>
              <button
                onClick={() => {
                  window.open(proj.url, "_blank");
                }}>
                <img
                  src={proj.img}
                  alt="project image"
                  className="object-contain justify-end border-4 rounded-md border-[#e1aabb]/75 dark:border-[#f4dddd]/75"
                />
              </button>
            </div>
            <div
              key={proj.id}
              className="text-black py-5">
              <h2 className="pb-5 text-base sm:text-lg font-semibold">Technologies Used:</h2>
              <ul className="grid-li grid grid-cols-2 sm:grid-cols-4 sm:grid-rows-2 gap-3 text-xs">
                {proj.tech.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
