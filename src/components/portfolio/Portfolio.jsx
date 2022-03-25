import React from "react";
import "./Portfolio.scss";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Examination Portal",
      github: "https://github.com",
    },
    {
      id: 2,
      image: IMG2,
      title: "School Management Web-App",
      github: "https://github.com",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="image">
                <img src={image} alt="{title}" />
              </div>
              <h3>{title}</h3>
              <div className="cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
