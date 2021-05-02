import React from 'react';
import './About.css'


export default class About extends React.Component {
    render() {
      return (
        <div className="about-container">
          <h2>About Me</h2>
          <p className="about-element">This is text.</p>
          <img className="about-photo" src="./chicago.jpg" alt="A photo of me in Chicago"/>
        </div>
      );
    }
  }