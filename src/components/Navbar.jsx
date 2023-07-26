import React from "react";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="px-0 2x1:px-40">
      <div className="w-full items-center justify-between py-4 px-4 md:px-12">
        <div className="flex items-center justify-between w-full">
          <a
            href="/"
            className="text-2xl font-bold text-pink-500 cursor-pointer">
            Jenny
          </a>
          <ul className="hidden md:flex gap-10 text-lg text-slate-800 dark:text-gray-200">
            <li className="cursor-pointer hover:text-purple-900">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-purple-900">
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer hover:text-purple-900">
              <a href="#skills">Skills</a>
            </li>
            <li className="cursor-pointer hover:text-purple-900">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button onClick={toggleTheme} className="p-2">
            {darkMode ? (
              <FiSun
                size={24}
                color={"white"}
              />
            ) : (
              <FiMoon
                size={24}
                color={"black"}
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
                className={`${isOpen ? "hidden" : "block"} text-gray-800 dark:text-gray-50`}
              />
              <MdOutlineClose
                size={26}
                className={`${isOpen ? "block" : "hidden"} h-6 w-6 dark:text-gray-50`}
              />{" "}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`}
          id="mobile-menu">
          <div className="flex flex-col gap-4 text-md text-gray-700 dark:text-neutral-200">
            <a
              href="#home"
              onClick={toggleMenu}
              className="cursor-pointer">
              Home
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="cursor-pointer">
              About
            </a>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
