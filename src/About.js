import React from 'react';
import FadeIn from 'react-fade-in';
import './About.css'


export default class About extends React.Component {
    render() {
      return (
          <div className="about-container">
            <FadeIn>
              <h2>About Me</h2>
              <p className="about-element">
                I am currently a Senior at Oregon State University, pursuing a B.S. in Computer Science. I am following the more engineering-focused 
                Computer Systems option. Last summer I worked as a SWE intern at Qualtrics, developing a full stack project for the Qualtrics Messaging 
                Platform team. During the school year, I work as a Full Stack Web Developer for University IT. I am excited to get my first full-time 
                role as a software engineer and continue to hone my technical and soft skills.I am currently a Senior at Oregon State University, pursuing 
                a B.S. in Computer Science. I am following the more engineering-focused Computer Systems option. Last summer I worked as a SWE intern at Qualtrics, 
                developing a full stack project for the Qualtrics Messaging Platform team. During the school year, I work as a Full Stack Web Developer for University 
                IT. I am excited to get my first full-time role as a software engineer and continue to hone my technical and soft skills.
              </p>
              <p className="about-element">In my free time I like to cook, game, rock climb, run, golf, and read.</p>
              <div className="about-photo">
                <img className="about-photo" src="./chicago.jpg" alt="Me in Chicago"/>
              </div>
            </FadeIn>
          </div>
      );
    }
  }