import React from "react";
import "../skills/Skills.css";


const Skills = () => {
  return (
    
    <div id="skills" className="skills">
      
      <div className="skills-container">
        <h3>Skills</h3>
        <div className="front-end">
          <div className="front-head">
        <p>Front-End Skills</p>
        </div>
        <div className="skills-cards">
          <div className="html-card card">
            <p>HTML</p>
            <img src="/html.png" alt="" />
          </div>
          <div className="CSS-card card">
            <p>CSS</p>
            <img src='/css.png' alt="" />
          </div>
          <div className="JavaScript-card card">
            <p>JavaScript</p>
            <img src='/js.png' alt="" />
          </div>
          <div className="React-card card">
            <p>React</p>
            <img src='/react.png' alt="" />
          </div>
        </div>
        </div>
        <div className="version-control">
        <p>Version Control</p>
        <div className="skills-cards">
          <div className="html-card card">
            <p>Github</p>
            <img src='/github.png' alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
