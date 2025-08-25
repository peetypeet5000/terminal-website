import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        I am currently working as a Software Test Engineer at Solar Turbines. In 
        this role, I am responsible for making sure the controls software for our
        turbomachinery products exactly matches customer specifications and is safe 
        for operation. In this role I have worked extensively to improve the process 
        of testing software, written extensive documentation, lead challangeing 
        customer meetings, and collaborated with our internal tools team to improve 
        the tools written in C# adn VBA. 
        </p>
        <p>
        I went to school at Oregon State University and graduated 
        with a B.S. in Computer Science. I followed the more engineering-focused 
        Computer Systems option. As a rising senior, I worked as a SWE intern at 
        Qualtrics, where I developed a full stack project for the Qualtrics Messaging 
        Platform team. I delivered that project ahead of time and added many more features 
        and usability improvements during my time there. During the final 2 years
        years, I worked as a Full Stack Web Developer for University IT. In that
        of school, I was responsible for maintaining and updating 5 websites and 6
        scripts for the IT department of my University. I am proud of many of
        the new features and practices I implemented such as: zero-downtime
        deployments, CI pipelines, GenderMag UI anaylsis, and regular security
        audits.
      </p>
      <p>
        In my free time I like to cook, game, rock climb, run, golf, and read.
        Last school year, I ran the rock climbing club to help bring my passion
        of the sport to more people and to create a welcoming enviroment for it
        at my school.
      </p>
      <div className="about__photo">
        <img src="./train.jpg" alt="Me standing next to a train in Haarlem, Netherlands" />
        <img src="./climb.jpg" alt="Me climbing in Smith Rock, Oregon" />
      </div>
    </div>
  );
}
