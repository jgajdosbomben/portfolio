import React from "react";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="px-0 2x1:px-40">
      <div className="w-full items-center justify-between py-4 px-4 md:px-12">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start w-full">
            <a
              href="/"
              className="text-3xl font-bold font-comicneue tracking-wide text-black dark:text-white cursor-pointer">
              Jennifer.
            </a>
          </div>
          <ul className="hidden md:flex font-comicneue tracking-wide gap-6 text-2xl text-slate-800 dark:text-gray-200">
            <li className="cursor-pointer hover:text-purple-500 hover:underline decoration-wavy dark:hover:text-purple-300">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-purple-500 hover:underline decoration-wavy  dark:hover:text-purple-300">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:text-purple-500 hover:underline decoration-wavy  dark:hover:text-purple-300">
              <a href="#projects">Education</a>
            </li>
            <li className="cursor-pointer hover:text-purple-500 hover:underline decoration-wavy  dark:hover:text-purple-300">
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer hover:text-purple-500 hover:underline decoration-wavy dark:hover:text-purple-300">
              <a href="#skills">Skills</a>
            </li>
            <li className="cursor-pointer hover:text-purple-500 hover:underline decoration-wavy dark:hover:text-purple-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="flex items-center justify-end basis-28"></div>
          <button
            onClick={toggleTheme}
            className="p-2">
            {darkMode ? (
              <FiSun
                size={24}
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
                className={`${isOpen ? "hidden" : "block"} text-gray-800 dark:text-gray-50 font-comicneue`}
              />
              <MdOutlineClose
                size={26}
                className={`${isOpen ? "block" : "hidden"} h-6 w-6 dark:text-gray-50 font-comicneue`}
              />{" "}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`}
          id="mobile-menu">
          <div className="flex flex-col gap-4 text-md font-comicneue text-gray-700 dark:text-neutral-200">
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
            <a
              href="#skills"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-purple-500 hover:underline decoration-wavy dark:hover:text-purple-300">
              Skills
            </a>
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
