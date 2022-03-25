import React from "react";
import "./Navigation.scss";
import { AiOutlineHome } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDots } from "react-icons/bi";
import { CgCodeSlash } from "react-icons/cg";
import { useState } from "react";
const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => {
          setActiveNav("#");
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => {
          setActiveNav("#about");
        }}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => {
          setActiveNav("#experience");
        }}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => {
          setActiveNav("#portfolio");
        }}
      >
        <CgCodeSlash />
      </a>
      <a
      className={activeNav === "#services" ? "active" : ""}
        href="#services"
        onClick={() => {
          setActiveNav("#services");
        }}
      >
        <RiServiceLine />
      </a>
      <a
      className={activeNav === "#contact" ? "active" : ""}
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
      >
        <BiMessageSquareDots />
      </a>
    </nav>
  );
};

export default Navigation;
