import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="bg-black">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl">Projects</h1>
      </div>

      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="w-full flex flex-wrap grow-0 items-center justify-center gap-10 lg:gap-20 pt-10">
        {projects.map((proj, index) => (
          <div className="flex flex-col gap-2 max-w-md h-full items-center px-4 py-3 bg-white rounded-md">
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
