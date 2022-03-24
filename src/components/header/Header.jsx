import React from "react";
import "./Header.css";
import CTA from "./CTA";
import heroImage from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Nimesh Maharjan</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="hero-image">
          <img src={heroImage} alt="" />
        </div>
        <a href="" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
