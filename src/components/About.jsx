import React from "react";

const About = () => {
  return (
    <div className="w-full p-10">
      <h1 className="text-3xl sm:text-5xl font-bold text-white text-center">
        About Me
      </h1>
      <div className="w-full grid grid-cols-1 grid-row-3 gap-12 md:grid-cols-6 md:grid-rows-2 justify-center items-center">
        {/* <div className="col-span-1 row-span-1 sm:col-span-2 md:row-span-2">
          <img
            src="../websitephoto.png"
            alt="personal-image"
            className="blob object-cover w-100% h-100% placeholder:-top-5 md:-top-10 pt-5"></img>
        </div> */}
        <div className="col-span-1 row-span-1 md:col-start-3 md:col-end-7 md:row-span-2 self-center justify-start">
          <p className="text-base md:text-lg text-white dark:text-white leading-8">
          I recently took a diversion from my thirteen year career in Records and Information Management (RIM) to further my learning and gain new knowledge in different technologies. It was through the Full Stack Developer program at InceptionU that I discovered full stack development and how it could complement my background in RIM. I love being able to combine both my creative and logical/mathematical sides.{" "}
          </p>
          <br />
          <br />
          <p className="text-base md:text-lg text-white dark:text-white leading-8">
          Drawing from my background and love of mathematics, I enjoy using my problem solving and analysis abilities to help deliver business solutions that increase efficiency and improve operations. I have a proven ability in developing and implementing policies and practices in records management that streamline operations while ensuring compliance with private and public sector legal, regulatory, and business requirements. I am extremely self-disciplined and utilize my detail oriented approach and communication skills to consistently deliver outstanding results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
