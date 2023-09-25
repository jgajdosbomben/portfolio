import React from "react";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="px-0">
      <div className="w-full items-center justify-between py-4 px-4 md:px-12 bg-[#2e2c2e]">
        {/* bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0e0e0e] via-[#3a373a] to-[#1d1d1d] */}
        {/* bg-gradient-to-r from-[#3f0539] from-15%  via-[#0a7694] via-40% to-[#a81588] to-90% */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify- w-full">
            <a
              href="/"
              className="text-lg font-semi-bold font-montserrat tracking-wide text-white cursor-pointer hover:text-rose-200">
              Jennifer GB
            </a>
          </div>
          <div className="flex justify-end items-center w-full">
            <ul className="hidden md:flex font-semi-bold font-montserrat tracking-wide gap-10 text-lg text-white">
              <li className="cursor-pointer hover:text-rose-200 hover:underline decoration-wavy dark:hover:text-rose-200">
                <a href="#home">Home</a>
              </li>
              <li className="cursor-pointer hover:text-rose-200 hover:underline decoration-wavy  dark:hover:text-rose-200">
                <a href="#about">About</a>
              </li>
              {/* <li className="cursor-pointer hover:text-rose-200 hover:underline decoration-wavy  dark:hover:text-rose-200">
              <a href="#projects">Background</a>
            </li> */}
              <li className="cursor-pointer hover:text-rose-200 hover:underline decoration-wavy  dark:hover:text-rose-200">
                <a href="#projects">Projects</a>
              </li>
              {/* <li className="cursor-pointer hover:text-rose-200  hover:underline decoration-wavy dark:hover:text-rose-200">
              <a href="#skills">Skills</a>
            </li> */}
              <li className="cursor-pointer hover:text-rose-200  hover:underline decoration-wavy dark:hover:text-rose-200">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-end basis-28"></div>
          <button
            onClick={toggleTheme}
            className="px-5 py-3"
            aria-label="toggle night/day mode">
            {darkMode ? (
              <FiSun
                size={26}
                color={"white"}
                className="cursor-pointer hover:fill-rose-200"
              />
            ) : (
              <FiMoon
                size={26}
                color={"white"}
                className="cursor-pointer hover:fill-rose-200"
              />
            )}
          </button>
          <div className="md:hidden">
            <button
              type="button"
              className="px-5 py-3"
              aria-label="mobile menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}>
              <FiMenu
                size={26}
                className={`${isOpen ? "hidden" : "block"} text-white dark:text-gray-50 font-montserrat hover:text-rose-200`}
              />
              <MdOutlineClose
                size={26}
                className={`${isOpen ? "block" : "hidden"} h-6 w-6 text-white dark:white font-montserrat hover:text-rose-200`}
              />{" "}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`}
          id="mobile-menu z-10">
          <div className="flex flex-col gap-4 text-md font-montserrat text-white dark:white z-10">
            <a
              href="#home"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-rose-200 hover:underline decoration-wavy dark:hover:text-rose-200 z-10">
              Home
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-rose-200 hover:underline decoration-wavy dark:hover:text-rose-200 z-10">
              About
            </a>
            {/* <a
              href="#background"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-rose-200 hover:underline decoration-wavy dark:hover:text-rose-200 z-10">
              Background
            </a> */}
            <a
              href="#projects"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-rose-200 hover:underline decoration-wavy dark:hover:text-rose-200 z-10">
              Projects
            </a>
            {/* <a
              href="#skills"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-rose-200 hover:underline decoration-wavy dark:hover:text-rose-200">
              Skills
            </a> */}
            <a
              href="#contact"
              onClick={toggleMenu}
              className="cursor-pointer hover:text-[#e8b9b9] hover:underline decoration-wavy dark:hover:text-[#e8b9b9] z-10">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
