import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text font-montserrat text-black dark:text-white">
      <footer>
        <div className="w-full flex flex-col justify-center md:flex-row py-7 px-10 text-md gap-3 md:gap-10">
        <ul className="hidden md:flex tracking-wide gap-6 text-md text-black dark:text-white">
            <li className="cursor-pointer hover:text-[#620646] hover:underline decoration-wavy dark:hover:text-rose-200">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:[#620646] hover:underline decoration-wavy  dark:hover:text-rose-200">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:[#620646] hover:underline decoration-wavy  dark:hover:[#620646]">
              <a href="#projects">Education</a>
            </li>
            <li className="cursor-pointer hover:[#620646] hover:underline decoration-wavy  dark:hover:text-rose-200">
              <a href="#projects">Projects</a>
            </li>
            </ul>
        </div>
        <div className="text-md">Copyright © {currentYear}</div>
      </footer>
    </div>
  );
};

export default Footer;
