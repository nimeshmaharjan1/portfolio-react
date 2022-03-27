import React from "react";
import "./Experience.scss";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience-container">
          <div className="experience-front-end">
            <h3>Front End Development</h3>
            <div className="experience-content">
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>HTML5</h4>
                  <small className="text-light">Intermidiate</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>CSS3</h4>
                  <small className="text-light">Intermidiate</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>Vanilla JavaScript</h4>
                  <small className="text-light">Intermidiate</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>Angular 8+</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>Bootstrap 3+</h4>
                  <small className="text-light">Intermidiate</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Skillful</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>SEO</h4>
                  <small className="text-light">Skillful</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience-back-end">
            <h3>Back End Development</h3>
            <div className="experience-content">
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>Spring Framework</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>Spring Boot</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>MYSQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>ORACLE</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>ASP.NET Core</h4>
                  <small className="text-light">Skillful</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>MVC Architecture</h4>
                  <small className="text-light">Skillful</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Experience;
