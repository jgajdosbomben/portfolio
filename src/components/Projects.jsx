import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="bg-[#343434] dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#28031e] to-[#1d1d1d] font-montserrat text-white dark:text-white px-10 py-10">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl">Projects</h1>
      </div>

      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="grid grid-cols-2 gap-2 items-center justify-center p-10 lg:grid-cols-4 md:gap-4 pt-10">
        {projects.map((proj, index) => (
          <div className="grid col-span-2 gap-2 h-full items-center px-4 py-3 rounded-md bg-[#f4dddd]">
            <p className="text-black dark:text-black text-2xl font-bold">{proj.name}</p>
            <a
              href={proj.url}
              className="text-black dark:text-black text-lg font-bold">
              {proj.url}
            </a>
            <p className="text-black dark:text-black text-sm font-bold">{proj.description}</p>
            <img
              src={proj.img}
              className="w-70 h-50 justify-end"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
