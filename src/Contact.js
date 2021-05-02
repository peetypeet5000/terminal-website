import React from 'react';
import FadeIn from 'react-fade-in';
import './About.css'


export default class Contact extends React.Component {
    render() {
      return (
        <div className="about-container">
          <FadeIn>
            <h2>Contact Me</h2>
            <div className="about-element big"><span className="about-emphesis">Email: </span>peter@peterlamontagne.com</div>
            <div className="about-element big"><span className="about-emphesis">Phone: </span>(503) - 853 - 4419</div>
            <div className="about-element big"><span className="about-emphesis">LinkedIn: </span><a href="http://www.linkedin.com/in/peter-lamontagne">LinkedIn.com/in/Peter-LaMontagne</a></div>
            <div className="about-element big"><span className="about-emphesis">GitHub: </span><a href="https://github.com/peetypeet5000">GitHub.com/Peetypeet5000</a></div>
            </FadeIn>
          <br/>
        </div>
      );
    }
  }