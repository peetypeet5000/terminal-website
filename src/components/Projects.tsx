import React, { ReactElement } from "react";
import projects from "./projects.json";
import './Projects.css'
import './Menu.css'

export default function Projects(): ReactElement {
  return (
    <div>
      <h2>Projects</h2>
      <p>Browse below for a selection of projects I worked on for school and in my personal time.</p>
      <div className="project">
        {projects.reverse().map((project, index) => {
          return (
            <div className="project__card" key={index}>
              <h3 className="project__header">
                {project.projectTitle}
              </h3>

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
                  {project.projectLink && <a className="menu__button project__button" href={project.projectLink} target="_blank" rel="noreferrer">Link to Project Repository</a>}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
