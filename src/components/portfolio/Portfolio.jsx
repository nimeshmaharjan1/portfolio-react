import React from "react";
import "./Portfolio.scss";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio6.jpg";
const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title:
        "Full Stack Web Examination Portal Application with Angular 13 & Spring Boot",
      github: "https://github.com/nimeshmaharjan1/pariksan_portal-frontend",
    },
    {
      id: 2,
      image: IMG2,
      title:
        "School Management Web-App with C# by using Model, View and Controller Architecture",
      github: "https://github.com/nimeshmaharjan1/Csharp-MVC-Beginners",
    },
    {
      id: 3,
      image: IMG3,
      title: "Web-based Ecommerce Application with React and Express",
      github: "https://github.com/nimeshmaharjan1/ecommerce-react-front-end",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {data.map(({ id, image, title, github }) => {
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
