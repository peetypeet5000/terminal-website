import React from 'react';
import './ResumeBody.css'
import FadeIn from 'react-fade-in';

export default class ResumeBody extends React.Component {
    render() {
            return (
                <div id="resume" >
                    <FadeIn>
                        <div className="post-content-resume">
                            <div className="resume-element">
                                <h1>Peter LaMontagne</h1>
                                <p>8995 Sw Sunstead Lane, Portland OR 97225 | peter@peterlamontagne.com | (503) - 853 - 4419</p>
                            </div>


                            <div className="resume-element">
                                <h2>Skills</h2>
                                <ul>
                                    <li>Experience with JavaScript/Node.js, Angular, React, HTML/CSS, C++, C, and Python</li>
                                    <li>Well-versed in Version Management, Agile Development, and UNIX Systems</li>
                                    <li>Excellent Written and Verbal Communication, Strong Independent Work Ethic</li>
                                </ul>
                            </div>

                            <div className="resume-element">
                                <h2>Education</h2>
                                <p><b>Oregon State University</b><br></br>2019-Present (est. 2023)<br></br>GPA: 3.99 - Dean's List (all terms)<br/>Computer Science - Computer Systems Option
                                <br/>Relevant Courses: Data Structures, Web Development, Operating Systems, Software Engineering I & II, Algorithms, Databases, Computer Programming I & II, Digital Logic Design, Technical Writing
                                <br></br>Relevant Projects: UNIX Shell, Node.js & Websocket Tic Tac Toe, Personal Website. GitHub: peetypeet5000</p>
                                <p><b>Beaverton High School</b><br/>2015-2019, GPA: 4.0/4.23, 7 AP classes, AP Scholar with Distinction</p>
                            </div>

                            <div className="resume-element">
                                <h2>Experience</h2>
                                <div  className="no-margin">
                                    <h5>3/20 – Present</h5>
                                    <h4 className="no-margin">Full Stack Web Developer | Digital Transformation - University IT - Oregon State University</h4>
                                </div>
                                <ul>
                                    <li>Responsible for maintaining and updating internal web-based & CLI tools used by IT staff at the University</li>
                                    <li>Develop applications built with Node.js, Angular, Express, PHP, Webpack, Handlebars, and more</li>
                                    <li>Manage CentOS web servers, maintain security, and perform common DevOps tasks</li>
                                    <li>Configured and deployed a new CI service for our most used apps, implemented 0-downtime deployments</li>
                                    <li>Developed API integrations with OSU ITSM Platform, Microsoft Azure, and other API endpoints</li>
                                    <li>Designed and created entirely new Node.js/Express/MongoDB/Handlebars Management application</li>
                                    <li>Experience interacting with project stakeholders, collaborating within an agile development process, and working highly independently</li>
                                </ul>
                                <div  className="no-margin">
                                    <h5>3/20 – Present</h5>
                                    <h4 className="no-margin">Helpdesk Student Consultant | CoSINe Helpdesk - Oregon State University</h4>
                                </div>
                                <ul>
                                    <li>Helped lead front-line IT support for various colleges in the University, supporting 1000’s of users</li>
                                    <li>Communicated with users and coworkers in a professional, accurate, and timely manner</li>
                                    <li>Interacted with back end systems, configured networking, helped troubleshoot, and wrote documentation</li>
                                    <li>Became first student certified Apple technician to repair user’s Mac devices</li>
                                </ul>

                                <div className="no-margin">
                                    <h5>6/19 – 9/19</h5>
                                    <h4 className="no-margin">Summer Camp Lead & Sportsplex Attendant | Mittleman Jewish Community Center</h4>
                                </div>
                                <ul>
                                    <li>As sportsplex attendant, was responsible for supervising activities, maintaining safety, closing building</li>
                                    <li>Worked in teams of 2-3 to instruct large (30+) groups of children, with individual attention when necessary</li>
                                </ul>
                                
                                <div className="no-margin">
                                    <h5>10/17 – 6/18</h5>
                                    <h4 className="no-margin">Discovery Club Leader | Garden Home Rec Center - Tualatin Hills Parks & Recreation</h4>
                                </div>
                                <ul>
                                    <li>Instructed groups of 10-15 Elementary school kids, ensured safety, dealt with concerns from parents</li>
                                </ul>
                            </div>
                            <br></br><br></br><br></br>
                        </div>
                    </FadeIn>
                </div>
        );
    }
}