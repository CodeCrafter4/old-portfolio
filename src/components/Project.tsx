import React from "react";
import mock02 from "../assets/images/gym.png";
import mock03 from "../assets/images/br.png";
import mock06 from "../assets/images/bl.png";
import mock07 from "../assets/images/ec.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          <h2>E-commerce Website Using React JS</h2>
          <p>
            E-commerce Website Using React JS | MERN Stack eCommerce Project
            with Stripe.
          </p>
          <h6>
            <a href="https://ecommerce-frontend-gamma-coral.vercel.app/">
              Go Live
            </a>
          </h6>
        </div>

        <div className="project">
          <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          <h2>Blog App</h2>
          <p>
            Full Stack Blog App Using Next JS & MongoDB | Backend, Frontend and
            Admin Project.
          </p>
          <h6>
            <a href="https://blogger-eight-rosy.vercel.app/">Go Live</a>
          </h6>
        </div>

        <div className="project">
          <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          <h2>AI BG Removal SaaS App</h2>
          <p>
            AI BG Removal SaaS App using React JS, Clerk | Full Stack AI React
            Project.
          </p>
          <h6>
            <a href="https://background-removal-tjpt.vercel.app/">Go Live</a>
          </h6>
        </div>

        <div className="project">
          <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          <h2>Fitness Exercises App</h2>
          <p>Modern React 18 Fitness Exercises App With APIs | RapidAPI.</p>
          <h6>
            <a href="www.google.com">Go Live</a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Project;
