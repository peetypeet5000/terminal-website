import React, { ReactElement } from "react";
import projects from "./projects.json";
import './Projects.css'
import './Menu.css'

export default function Projects(): ReactElement {
  return (
    <div className="project">
      {projects.reverse().map((project, index) => {
        return (
          <div className="project__card" key={index}>
            <h2>
              {project.projectTitle}
            </h2>

            <div className="project__content">
              <img
                className="project__image"
                src={project.projectImage}
                alt={project.projectImageAlt}
              />
              <p className="project__text">
                {project.projectDescription}
                <br />
                <br />
                {project.projectLink && <a className="menu__button" href={project.projectLink} target="_blank" rel="noreferrer">Link to Project Repository</a>}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
