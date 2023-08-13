import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p className="about__paragraph">
        I am recent graduate at Oregon State University with a B.S. in Computer
        Science. I am following the more engineering-focused Computer Systems
        option. Last summer, I worked as a SWE intern at Qualtrics, developing a
        full stack project for the Qualtrics Messaging Platform team. I
        delivered that project ahead of time and added many more features and
        usability improvements during my time there. During the last 2 school
        years, I worked as a Full Stack Web Developer for University IT. In that
        role, I was responsible for maintaining and updating 5 websites and 6
        scripts for the IT department of my University. I am proud of many of
        the new features and practices I implemented such as: zero-downtime
        deployments, CI pipelines, GenderMag UI anaylsis, and regular security
        audits. I am excited to get my first full-time role as a software
        engineer and continue to hone my technical and soft skills.
      </p>
      <p className="about__paragraph">
        In my free time I like to cook, game, rock climb, run, golf, and read.
        Last school year, I ran the rock climbing club to help bring my passion
        of the sport to more people and to create a welcoming enviroment for it
        at my school.
      </p>
      <div className="about__photo">
        <img src="./chicago.jpg" alt="Me in Chicago" />
        <img src="./climb.jpg" alt="Me climbing in Smith Rock, Oregon" />
      </div>
    </div>
  );
}
