import React from "react";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="px-0 2x1:px-40">
      <div className="w-full items-center justify-between py-4 px-4 md:px-12 bg-black">
        {/* bg-gradient-to-r from-[#3f0539] from-15%  via-[#0a7694] via-40% to-[#a81588] to-90% */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start w-full">
            <a
              href="/"
              className="text-base font-semi-bold font-montserrat tracking-wide text-white cursor-pointer">
              Jennifer GB
            </a>
          </div>
          <ul className="hidden md:flex font-semi-bold font-montserrat tracking-wide gap-6 text-base text-white">
            <li className="cursor-pointer hover:text-slate-950 hover:underline decoration-wavy dark:hover:text-slate-950">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-slate-950 hover:underline decoration-wavy  dark:hover:text-slate-950">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:text-slate-950 hover:underline decoration-wavy  dark:hover:text-slate-950">
              <a href="#projects">Education</a>
            </li>
            <li className="cursor-pointer hover:text-slate-950 hover:underline decoration-wavy  dark:hover:text-slate-950">
              <a href="#projects">Projects</a>
            </li>
            {/* <li className="cursor-pointer hover:text-slate-950  hover:underline decoration-wavy dark:hover:text-slate-950">
              <a href="#skills">Skills</a>
            </li> */}
            <li className="cursor-pointer hover:text-slate-950  hover:underline decoration-wavy dark:hover:text-slate-950">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="flex items-center justify-end basis-28"></div>
          <button
            onClick={toggleTheme}
            className="p-2">
            {darkMode ? (
              <FiSun
                size={22}
                color={"white"}
                className="cursor-pointer"
              />
            ) : (
              <FiMoon
                size={24}
                color={"black"}
                className="cursor-pointer"
              />
            )}
          </button>
          <div className="md:hidden">
            <button
              type="button"
              className=""
              aria-controls=",onile-menu"
              aria-expanded="false"
              onClick={toggleMenu}>
              <FiMenu
                size={26}
                className={`${isOpen ? "hidden" : "block"} text-white dark:text-gray-50 font-comicneue`}
              />
              <MdOutlineClose
                size={26}
                className={`${isOpen ? "block" : "hidden"} h-6 w-6 text-white dark:white font-montserrat`}
              />{" "}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`}
          id="mobile-menu">
          <div className="flex flex-col gap-4 text-md font-montserrat text-white dark:white">
            <a
              href="#home"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-purple-500 hover:underline decoration-wavy dark:hover:text-purple-300">
              Home
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-purple-500 hover:underline decoration-wavy dark:hover:text-purple-300">
              About
            </a>
            <a
              href="#education"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-purple-500 hover:underline decoration-wavy dark:hover:text-purple-300">
              Education
            </a>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-purple-500 hover:underline decoration-wavy dark:hover:text-purple-300">
              Projects
            </a>
            {/* <a
              href="#skills"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-purple-500 hover:underline decoration-wavy dark:hover:text-purple-300">
              Skills
            </a> */}
            <a
              href="#contact"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-purple-500 hover:underline decoration-wavy dark:hover:text-purple-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
