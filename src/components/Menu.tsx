import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__info">
        <div className="menu__greeting">
          <h2>Hi there!</h2>
          <p>My name is Peter and I am a Full Stack Web Developer. I love building new systems 
            that empower developers and users to do their best work. Explore some of the stuff I have done 
            using the buttons below!
          </p>
        </div>
        <img src='./chicago.jpg' alt="Me sitting on a dock in Chicago"></img>
      </div>
      
      <Link className="menu__button" to="/resume">
        <span className="menu__header">Resume</span>
        <span className="menu__subheader">View my resume</span>
      </Link>
      <Link className="menu__button" to="/projects">
        <span className="menu__header">Projects</span>
        <span className="menu__subheader">
          See various projects I have worked on
        </span>
      </Link>
      <Link className="menu__button" to="/about">
        <span className="menu__header">About</span>
        <span className="menu__subheader">Read more about me</span>
      </Link>
      <Link className="menu__button" to="/contact">
        <span className="menu__header">Contact</span>
        <span className="menu__subheader">Connect with me</span>
      </Link>
    </div>
  );
}
