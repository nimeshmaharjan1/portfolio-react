import React from "react";
import "./Services.scss";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services-container">
        <article className="service-card">
          <div className="service-header">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services-list">
            <li>
              <BiCheck className="services-list-icon" />
              <p>Create aesthetically pleasing designs.</p>
            </li>
          </ul>
        </article>
        <article className="service-card">
          <div className="service-header">
            <h3>Web Development</h3>
          </div>
          <ul className="services-list">
            <li>
              <BiCheck className="services-list-icon" />
              <p>Develop full stack web applications with modern design, security and SEO.</p>
            </li>
          </ul>
        </article>
        <article className="service-card">
          <div className="service-header">
            <h3>Video Editing</h3>
          </div>
          <ul className="services-list">
            <li>
              <BiCheck className="services-list-icon" />
              <p>Create game montages.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
