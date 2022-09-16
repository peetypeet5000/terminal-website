import React from 'react';
import './About.css'


export default class About extends React.Component {
    render() {
      return (
          <div className="about-container">
            <h2>About Me</h2>
            <p className="about-element">Hi! My name is Peter LaMontagne and I am currently a Senior Computer Science Student
            at Oregon State Univeristy. I am in the computer systems option, with the goal of becoming a Software Engineer
              after graduation.</p>
            <p className="about-element">In my free time I like to cook, game, rock climb, run, golf, and read.</p>
            <div className="about-photo">
              <img className="about-photo" src="./chicago.jpg" alt="Me in Chicago"/>
            </div>
          </div>
      );
    }
  }