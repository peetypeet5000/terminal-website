import React from 'react';

export default function Resume () {
  return (
    <div id="resume" >
      <div className="resume__content">
        <div className="resume__element">
          <h1>Peter LaMontagne</h1>
          <p>8995 Sw Sunstead Lane, Portland OR 97225 | peter@peterlamontagne.com | (503) - 853 - 4419</p>
        </div>

        <div className="resume__element">
          <h2>Skills</h2>
          <ul>
            <li><b>Programming Languages: </b>TypeScript, JavaScript, HTML, CSS, C++, Python, and Java</li>
            <li><b>Technologies: </b>Git/GitHub, Jenkins/CI,Docker, Linux, React, Angular, Node.js, Express, Jest, Apache Kafka</li>
            <li><b>Concepts: </b>REST APIs, Agile Development, Networking, Web Protocols, Databases, Testing</li>
          </ul>
        </div>

        <div className="resume__element">
          <h2>Education</h2>
          <p><b>Oregon State University </b>September 2019 - June 2023 <br />
            <b>Major: </b>Bachelors of Science in Computer Science - ABET accredited Computer Systems option <br />
            <b>GPA: </b>3.99 - Dean&apos;s List (all terms) <br />
            <b>Relevant Courses:</b> Data Structures, Web Development, Operating Systems, Software Engineering, Algorithms, Databases, Parallel Programming, 
                    Usability Engineering, Digital Logic Design, Computer Graphics <br />
            <b>Projects: </b>POSIX Shell, Node.js + Websockets Tic Tac Toe <br />
            <b>Senior Capstone: </b> Microsoft HoloLens Augmented Reality Visualization using Unity and Mixed Reality Toolkit <br />
            <b>Involvement: </b>Treasurer - Oregon State Indoor Rock Climbing Club <br />
            <b>Beaverton High School </b>September 2015 - June 2019, GPA: 4.0/4.23, 7 AP classes, AP Scholar with Distinction
          </p>
        </div>

        <div className="resume__element">
          <h2>Experience</h2>
          <div className="no-margin">
            <h5>June 2021 – Present</h5>
            <h4 className="no-margin">Full Stack Web Developer | Digital Transformation - University IT - Oregon State University</h4>
          </div>
          <ul>
            <li>Responsible for maintaining and updating internal web-based & CLI tools used by IT staff at the University</li>
            <li>Construct applications built with Node.js, Angular, Express, PHP, Webpack, Handlebars, and more</li>
            <li>Manage CentOS & Ubuntu web servers, CI service, deployments, and perform common DevOps tasks</li>
            <li>Implemented new practices such as: 0-downtime deployments, CI pipelines, application health alerting</li>
            <li>Create REST API integrations with OSU ITSM Platform, Microsoft Azure, and other in-house APIs</li>
            <li>Led development and design for entirely new Node.js/Express/MongoDB Management web application</li>
          </ul>
          <div className="no-margin">
            <h5>June 2022 – September 2022</h5>
            <h4 className="no-margin">Software Engineer Intern | Qualtrics Messaging Platform - Qualtrics | Seattle, WA</h4>
          </div>
          <ul>
            <li>Developed new REST API endpoints that interfaced with Apache Kafka using Java Spring and the SPA</li>
            <li>Built filterable Kafka consumer in Java to allow users to pinpoint important messages</li>
            <li>Improved speed of existing implementation by up to 5x, enhancing user experience</li>
            <li>Designed and improved various frontend UI components in React, emphasizing quality of life and usability</li>
            <li>Updated app in Docker containers, achieved 90%+ test coverage, and deployed containers to AWS</li>
            <li>Researched and prototyped to make designs decisions based on ambiguous requirements, consulted team</li>
          </ul>
          <div className="no-margin">
            <h5>March 2020 – June 2021</h5>
            <h4 className="no-margin">Helpdesk Student Consultant | CoSINe Helpdesk - Oregon State University</h4>
          </div>
          <ul>
            <li>Helped lead front-line IT support for various colleges in the University, supporting 1000’s of users</li>
            <li>Communicated with users and coworkers in a professional, accurate, and timely manner</li>
            <li>Interacted with back end systems, configured networking, helped troubleshoot, and wrote documentation</li>
            <li>Became first student certified Apple technician to repair user’s Mac devices</li>
          </ul>

          <div className="no-margin">
            <h5>June 2019 – September 2019</h5>
            <h4 className="no-margin">Summer Camp Lead & Sportsplex Attendant | Mittleman Jewish Community Center</h4>
          </div>
          <ul>
            <li>As sportsplex attendant, was responsible for supervising activities, maintaining safety, closing building</li>
            <li>Worked in teams of 2-3 to instruct large (30+) groups of children, with individual attention when necessary</li>
          </ul>

          <div className="no-margin">
            <h5>October 2017 – June 2018</h5>
            <h4 className="no-margin">Discovery Club Leader | Garden Home Rec Center - Tualatin Hills Parks & Recreation</h4>
          </div>
          <ul>
            <li>Instructed groups of 10-15 Elementary school kids, ensured safety, dealt with concerns from parents</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
