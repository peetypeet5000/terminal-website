import React from 'react'

export default function About () {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p className="about__paragraph">Hi! My name is Peter LaMontagne and I am currently a Senior Computer Science Student
      at Oregon State Univeristy. I am in the computer systems option, with the goal of becoming a Software Engineer
        after graduation.</p>
      <p className="about__paragraph">In my free time I like to cook, game, rock climb, run, golf, and read.</p>
      <div className="about__photo">
        <img className="about__photo" src="./chicago.jpg" alt="Me in Chicago"/>
      </div>
    </div>
  );
}