import { useState } from "react";
// import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`"w-full h-full min-h-[100vh] bg-gradient-to-br from-[#f4dddd]  to-[#9d9b9b]" ${darkMode && "dark"}`}>
      {/* Sets main colour for light mode */}
      <div className="w-full h-full min-h-[100vh] bg-[#f4dddd]">
      {/* gradient-to-br from-[#f4dddd]  to-[#9d9b9b] */}
        {/* [radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#f4dddd] to-[#06308b] */}
        {/* Sets main colour for dark mode */}
        <div className="dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#620646] to-[#1d1d1d]">
          {/* dark:bg-gradient-to-tr from-[#f4dddd] via-[#f3eeee] to-[#f4dddd] */}
          <Navbar
            darkMode={darkMode}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            toggleTheme={toggleTheme}
          />
          <section
            id="home"
            className="px-0 lg:py-0 2xl:py-10">
            <Header />
          </section>
          <section
            id="about"
            className="w-full h-full min-h-[100vh] 2xl: py-10 lg:py-0 bg-[#2e2c2e] dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#28031e] to-[#1d1d1d]">
            <About />
          </section>
          <section
            id="education"
            // className="w-full h-full min-h-[100vh] bg-gradient-to-r from-[#ffcccc] via-[#ffddcc] to-[#fbe9ed]">
            className="w-full h-full min-h-[100vh] 2xl:py-10 lg:py-0">
            <Education />
          </section>
          <section
            id="projects"
            // className="w-full h-full min-h-[100vh] bg-gradient-to-r from-[#ffcccc] via-[#ffddcc] to-[#fbe9ed]">
            className="w-full lg: 2xl:py-10 lg:py-0">
            <Projects />
          </section>
          <section
            id="skills"
            // className="w-full h-full min-h-[100vh] bg-gradient-to-r from-[#ffcccc] via-[#ffddcc] to-[#fbe9ed]">
            className="w-full h-full min-h-[100vh] 2xl:py-10 lg:py-0">
            <Skills />
          </section>
          <section
            id="contact"
            // className="w-full h-full min-h-[100vh] bg-gradient-to-r from-[#ffcccc] via-[#ffddcc] to-[#fbe9ed]">
            className="w-full h-full bg-[url('/src/assets/banner-laptop.png')]">
            <Contact />
          </section>
          <section
            id="footer"
            // className="w-full h-full min-h-[100vh] bg-gradient-to-r from-[#ffcccc] via-[#ffddcc] to-[#fbe9ed]">
            className="w-full text-center">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
