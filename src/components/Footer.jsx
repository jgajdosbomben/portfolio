import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="">
      <footer>Copyright © {currentYear}</footer>
    </div>
  );
};

export default Footer;
