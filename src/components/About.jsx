import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about w-full px-10 py-10 flex flex-col justify-center">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-white dark:text-white  ">About Me</h1>

        <div className="flex">
          <div className="profile">
            <img
              src="/src/assets/jennifer.jpg"
              alt="personal-image"
              className="profile_image"></img>

            {/* <img src="/src/assets/jenny.jpeg"
        className="h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125"/> */}
          </div>
          <div className="px-10 py-10">
            <p className="text-xl text-white dark:text-white leading-8">
              After years of searching for a career where I could balance my creative and logical/mathematical sides, I have
              finally found a harmonious balance in full stack development. As a new graduate from InceptionU’s Full Stack
              Developer program, I am eager to build intuitive, functional, and beautiful applications.{" "}
            </p>
          </div>
        </div>
        {/* <div className="outer-headings dark:text-white">
                    <h1>
                      
                      <div className="inner-headings dark:text-white">
                        <span className="text-black dark:text-white">
                          Full Stack Developer <br />
                          Front End Developer <br />
                          Back End Developer <br />
                          Record and Information Manager <br />
                          Dancer <br />
                          Mother <br />
                          Singer <br />
                          Pianist <br />
                          </span>
                      </div>
                    </h1>
                  </div> */}
      </div>
    </div>
  );
};

export default About;

{
  /* <section className="diagonal">
  <div className="wrapper">
    <h2 className="section-title"></h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</section>; */
}
//  <section className="diagonal">
//     <div className="wrapper">

//       <h2 className="section-title">Diagonal</h2>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum, perspiciatis a illo veniam ratione expedita assumenda laboriosam modi error maiores fugit soluta vitae temporibus voluptatum ducimus culpa similique quaerat?</p>
//       </div>
//       </section>