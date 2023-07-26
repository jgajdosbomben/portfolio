import { useState } from "react";
// import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./components/Header";

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
    <div className={`"w-full h-full min-h-[100vh] bg-white" ${darkMode && "dark"}`}>
      <div className="w-full h-full min-h-[100vh] bg-white">
        <div className="dark:bg-gradient-to-tr from-[#cc29b9] via-[#030a1c] to-[#05174e]">
          <Navbar
            darkMode={darkMode}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            toggleTheme={toggleTheme}
          />
          <section 
          id="home"
          className="px-0 lg:px-5 lg:py-0 2xl:px-40 py-10">
        <Header/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
