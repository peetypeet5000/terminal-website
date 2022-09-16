import React, { ReactElement } from 'react';
import projects from './projects.json';

export default function Projects(): ReactElement {

  return (
    <div className='project'>
      {projects.map((project, index) => {
        return (
        <div className="project__card" key={index}>
          <h2>Project {project.number}: {project.projectTitle}</h2>

          <div className="project__content">
            <img className="project__image" src={project.projectImage} alt={project.projectImageAlt}/>
            <p className="project__text">
              {project.projectDescription}
                <br/><br/>
                See the GitHub repo for this project <a href={project.projectGithub}>here.</a>
              </p>
          </div>
        </div>);
      })}
    </div>
  );    
}
