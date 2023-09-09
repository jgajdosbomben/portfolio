import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="font-montserrat text-black dark:text-white">
      <footer>
        <div className="w-full flex flex-col justify-center md:flex-wrap text-md gap-3 md:gap-10">
          <ul className=" flex-wrap md:flex tracking-wide gap-6 text-md px-6 py-6 justify-center text-black dark:text-white">
            <li className="cursor-pointer hover:text-zinc-600 hover:underline decoration-wavy dark:hover:text-rose-200">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-zinc-600  hover:underline decoration-wavy  dark:hover:text-rose-200">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:text-zinc-600  hover:underline decoration-wavy  dark:hover:text-rose-200">
              <a href="#projects">Background</a>
            </li>
            <li className="cursor-pointer hover:text-zinc-600  hover:underline decoration-wavy  dark:hover:text-rose-200">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-md">© {currentYear} &nbsp;Jennifer Gajdos-Bomben</li>
          </ul>
        </div>
        {/* <div className="text-md">Copyright © {currentYear}</div> */}
      </footer>
    </div>
  );
};

export default Footer;
