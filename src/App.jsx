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
    <div className={`"w-full h-full min-h-[100vh] bg-[#f4dddd]" ${darkMode && "dark"}`}>
      <div className="w-full h-full min-h-[100vh] bg-[#f4dddd]">
        {/* bg-gradient-to-r from-[#fcf4f4] */}
        {/* bg-gradient-to-r from-[#ffcccc] via-[#ffddcc] to-[#fbe9ed] */}
        <div className="bg-[#f4dddd] dark:bg-slate-900">
          {/* bg-gradient-to-tr from-[#cc29b9] via-[#030a1c] to-[#21054e] */}
          <Navbar
            darkMode={darkMode}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            toggleTheme={toggleTheme}
          />
          <section
            id="home"
            className="px-0 lg:py-0 2xl: py-10">
            <Header />
          </section>
          <section
            id="about"
            // className="w-full h-full min-h-[100vh] bg-gradient-to-r from-[#ffcccc] via-[#ffddcc] to-[#fbe9ed]">
            className="w-full 2xl: py-10 lg:py-0">
            <About />
          </section>
          <section
            id="education"
            // className="w-full h-full min-h-[100vh] bg-gradient-to-r from-[#ffcccc] via-[#ffddcc] to-[#fbe9ed]">
            className="w-full 2xl:py-10 lg:py-0">
            <Education />
          </section>
          <section
            id="projects"
            // className="w-full h-full min-h-[100vh] bg-gradient-to-r from-[#ffcccc] via-[#ffddcc] to-[#fbe9ed]">
            className="w-full lg: 2xl:py-10 lg:py-0 dark:bg-black">
            <Projects />
          </section>
          <section
            id="skills"
            // className="w-full h-full min-h-[100vh] bg-gradient-to-r from-[#ffcccc] via-[#ffddcc] to-[#fbe9ed]">
            className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 bg-#f4dddd dark:bg-black">
            <Skills />
          </section>
          <section
            id="contact"
            // className="w-full h-full min-h-[100vh] bg-gradient-to-r from-[#ffcccc] via-[#ffddcc] to-[#fbe9ed]">
            className="w-full bg-#f4dddd dark:bg-black">
            <Contact />
          </section>
          <section
            id="footer"
            // className="w-full h-full min-h-[100vh] bg-gradient-to-r from-[#ffcccc] via-[#ffddcc] to-[#fbe9ed]">
            className="w-full text-center bg-[#f4dddd]">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
