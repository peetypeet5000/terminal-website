import React from 'react';
import projects from './projects.json';

export default function Projects() {

  return (
    <>
      {projects.map((project) => {
        <div className="project-card">
          <h2>Project {project.number}: {project.projectTitle}</h2>

          <div className="project-content">
            <img className="project-image" src={project.projectImage} alt={project.projectImageAlt}/>
            <p className="project-text">
              {project.projectDescription}
                <br/><br/>
                See the GitHub repo for this project <a href={project.projectGithub}>here.</a>
              </p>
          </div>
        </div>
      })}
    </>
  );    
}
