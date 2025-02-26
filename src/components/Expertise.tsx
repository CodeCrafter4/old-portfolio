import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faJava } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "NextJs",
    "JavaScript",
   
  
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Hostinger",
    
    
];

const labelsThird = [
    "OpenAI",
    "ChatGPT",
    
    
];

function Expertise() {
    return (
      <div className="container" id="expertise">
        <div className="skills-container">
          <h1>Expertise</h1>
          <div className="skills-grid">
            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <h3>Full Stack Web Development</h3>
              <p>
                I have built a diverse array of web applications from scratch
                using modern technologies such as React and Vue.js. I have a
                strong proficiency in the SDLC process and frontend + backend
                development.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsFirst.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faDocker} size="3x" />
              <h3>Automation</h3>
              <p>
                Once the application is built, I help clients in
                testing, and deployment automation to support
                the successful Go-Live.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsSecond.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faJava} size="3x" />
              <h3>GenAI</h3>
              <p>
                Stay relevant in the market by leveraging the latest AI models
                in your projects. I have some experience building
                enterprise grade GenAI-enabled solutions to empower intelligent
                decision making.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsThird.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Expertise;