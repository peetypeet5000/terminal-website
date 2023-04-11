import React from 'react'

export default function About () {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p className="about__paragraph"> 
        I am currently a Senior at Oregon State University, pursuing a B.S. in Computer Science. I am following the more engineering-focused 
        Computer Systems option. Last summer I worked as a SWE intern at Qualtrics, developing a full stack project for the Qualtrics Messaging 
        Platform team. During the school year, I work as a Full Stack Web Developer for University IT. I am excited to get my first full-time 
        role as a software engineer and continue to hone my technical and soft skills.I am currently a Senior at Oregon State University, pursuing 
        a B.S. in Computer Science. I am following the more engineering-focused Computer Systems option. Last summer I worked as a SWE intern at Qualtrics, 
        developing a full stack project for the Qualtrics Messaging Platform team. During the school year, I work as a Full Stack Web Developer for University 
        IT. I am excited to get my first full-time role as a software engineer and continue to hone my technical and soft skills.
      </p>
      <p className="about__paragraph">In my free time I like to cook, game, rock climb, run, golf, and read.</p>
      <div className="about__photo">
        <img className="about__photo" src="./chicago.jpg" alt="Me in Chicago"/>
      </div>
    </div>
  );
}
