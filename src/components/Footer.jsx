import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>Copyright © {currentYear}</footer>
    </div>
  );
};

export default Footer;
