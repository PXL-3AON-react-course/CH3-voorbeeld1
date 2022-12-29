import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <section>
      <img src={Logo} alt="pxl" />
      <h1>Full-Stack Java - React & Components</h1>
    </section>
  );
};

export default Header;
