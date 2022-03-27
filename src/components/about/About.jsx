import React from "react";
import "./About.scss";
import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <img src={Me} alt="About" />
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>2+ Years Experience</small>
            </article>
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>10+</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>
          <p className="text-justify">
            Experienced Web Developer adept in all stages of advanced web
            development. Knowledgeable in user interface along with debugging
            processes. Bringing forth expertise in design, installation and
            maintenance of web systems. Equipped with a diverse and promising
            skill-set. Proficient in an assortment of technologies, including
            Angular, React JS, Bootstrap, Version Control (Github / Gitlab),
            Spring Framework, ASP.NET Core, Node, MYSQL, ORACLE and Microsoft
            SQL Server. Able to effectively self-manage during independent
            projects, as well as collaborate in a team setting.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
