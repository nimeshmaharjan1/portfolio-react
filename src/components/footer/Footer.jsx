import React from "react";
import "./Footer.scss";
import { FiFacebook } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <footer>
      <a href="#contact" className="logo">
        NIMESH
      </a>
      <ul className="perma-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="socials">
        <a href="https://github.com/nimeshmaharjan1">
          <FiGithub />
        </a>
        <a href="https://facebook.com/nimeshmaharjan1">
          <FiFacebook />
        </a>
        <a href="https://instagram.com/nimeshmaharjan1">
          <FiInstagram />
        </a>
      </div>
      <div className="copyright">
        <small>Powered By - Nimesh Maharjan 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
