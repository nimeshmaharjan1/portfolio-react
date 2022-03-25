import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const HeaderSocials = () => {
  const blankTarget = "_blank";
  return (
    <div className="header-socials">
      <a href="https://linkedin.com/nimeshmaharjan1" target={blankTarget}>
        {" "}
        <FaLinkedin />
      </a>
      <a href="https://github.com/nimeshmaharjan1" target={blankTarget}>
        <FaGithub />
      </a>
      <a href="https://instagram.com/nimeshmaharjan1" target={blankTarget}>
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
