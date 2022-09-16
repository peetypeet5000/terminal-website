import React from 'react';
import './ResumeBody.css'

export default class ResumeBody extends React.Component {
    render() {
            return (
                <div id="resume" >
                    <div className="post-content-resume">
                        <div className="resume-element">
                            <h1>Peter LaMontagne</h1>
                            <p>8995 Sw Sunstead Lane, Portland OR 97225 | peter@peterlamontagne.com | (503) - 853 - 4419</p>
                        </div>


                        <div className="resume-element">
                            <h2>Skills</h2>
                            <ul>
                                <li>Experience with JavaScript/Node.js, Angular, React, HTML/CSS, C++, and Java</li>
                                <li>Well-versed in Version Management, Agile Development, CI, Git, and Linux</li>
                                <li>Excellent Written and Verbal Communication, Strong Independent Work Ethic</li>
                            </ul>
                        </div>

                        <div className="resume-element">
                            <h2>Education</h2>
                            <p><b>Oregon State University</b><br></br>2019-Present (est. 2023)<br></br>GPA: 3.99 - Dean's List (all terms)<br/>Computer Science - Computer Systems Option
                            <br/>Relevant Courses: Data Structures, Web Development, Operating Systems I & II, Software Engineering I & II, Algorithms, Databases, Parallel Programming, 
                                Usability Engineering,  Digital Logic Design, Technical Writing
                            <br></br>POSIX Shell, Node.js+Websockets Tic Tac Toe, Personal Website</p>
                            <p><b>Beaverton High School</b><br/>2015-2019, GPA: 4.0/4.23, 7 AP classes, AP Scholar with Distinction</p>
                        </div>

                        <div className="resume-element">
                            <h2>Experience</h2>
                            <div  className="no-margin">
                                <h5>June 2022 – September 2022</h5>
                                <h4 className="no-margin">Software Engineer Intern | Qualtrics Messaging Platform - Qualtrics | Seattle, WA</h4>
                            </div>
                            <ul>
                                <li>Developed new API endpoints that interacted with Apache Kafka using Java Spring</li>
                                <li>Created filterable Kafka consumer to allow users to pinpoint important messages</li>
                                <li>Improved speed of existing implementation by up to 5x, enhancing user experience</li>
                                <li>Created and improved various frontend components, emphasizing quality of life and usability</li>
                                <li>Took new product to feature parity with old and added additional features to empower developers</li>
                                <li>Researched and prototyped to make designs decisions based on ambiguous requirements</li>
                            </ul>
                            <div  className="no-margin">
                                <h5>June 2021 – Present</h5>
                                <h4 className="no-margin">Full Stack Web Developer | Digital Transformation - University IT - Oregon State University</h4>
                            </div>
                            <ul>
                                <li>Responsible for maintaining and updating internal web-based & CLI tools used by IT staff at the University</li>
                                <li>Develop applications built with Node.js, Angular, Express, PHP, Webpack, Handlebars, and more</li>
                                <li>Manage CentOS web servers, maintain security, and perform common DevOps tasks</li>
                                <li>Configured and deployed a new CI service for our most used apps, implemented 0-downtime deployments</li>
                                <li>Developed API integrations with OSU ITSM Platform, Microsoft Azure, and other API endpoints</li>
                                <li>Designed and created entirely new Node.js/Express/MongoDB/Handlebars Management application </li>
                            </ul>
                            <div  className="no-margin">
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
                        <br></br><br></br><br></br>
                    </div>
                </div>
        );
    }
}