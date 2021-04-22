import React from 'react';
import './ResumeBody.css'
import { Button } from './App.js'

export default class ResumeBody extends React.Component {
    render() {
            return (
            <div id="resume" >
                <div className="post-content-resume">
                    <div className="resume-element">
                        <h1>Peter LaMontagne</h1>
                        <p>8995 Sw Sunstead Lane, Portland OR 97225 | peter@peterlamontagne.com | (503) - 853 - 4419 | peterlamontagne.com</p>
                    </div>


                    <div className="resume-element">
                        <h2>Skills</h2>
                        <ul>
                            <li>Experience in C++, C, HTML/CSS, JavaScript/Node.js, and Python</li>
                            <li>Well-versed in Version Management, Windows & Unix Systems, and Software Engineering Principles</li>
                            <li>Excellent Written and Verbal Communication</li>
                        </ul>
                    </div>

                    <div className="resume-element">
                        <h2>Education</h2>
                        <p><b>Oregon State University</b><br></br>2019-Present (est. 2023)<br></br>GPA: 3.99 - Dean's List (all terms)<br/>Computer Science - Computer Systems Option
                        <br/>Relevant Courses: Data Structures, Web Development, Software Engineering, Algorithms
                        <br></br>Relevant Projects: Node.js & Websocket Tic Tac Toe, Personal Website. GitHub: peetypeet5000</p>
                        <p><b>Beaverton High School</b><br/>2015-2019, GPA: 4.0, 7 AP classNamees, AP Scholar with Distinction</p>
                    </div>

                    <div className="resume-element">
                        <h2>Experience</h2>
                        <div  className="no-margin">
                            <h5>3/20 – Present</h5>
                            <h4 className="no-margin">Helpdesk Student Consultant | CoSINe Helpdesk - Oregon State University</h4>
                        </div>
                        <ul>
                            <li>Help lead frontline IT support for various colleges in the University.</li>
                            <li>Communicate with users and coworkers in a professional, accurate, and timely manner</li>
                            <li>Interact with backend system, configure devices, investigate issues, and write documentation</li>
                            <li>Became first student certified Apple technician to repair user’s Mac devices</li>
                        </ul>

                        <div className="no-margin">
                            <h5>6/19 – 9/19</h5>
                            <h4 className="no-margin">Summer Camp Lead & Sportsplex Attendant | Mittleman Jewish Community Center</h4>
                        </div>
                        <ul>
                            <li>Supervised and lead activities for primarily 8-10 year olds</li>
                            <li>Worked in teams of 2-3 to instruct large (30+) groups of children, with individual attention when necessary</li>
                            <li>As Sportsplex Attendant, was responsible for checking in players, helping guests with concerns, ensuring the safety of participants, and closing the facility</li>
                        </ul>
                        
                        <div className="no-margin">
                            <h5>10/17 – 6/18</h5>
                            <h4 className="no-margin">Discovery Club Leader | Garden Home Rec Center - Tualatin Hills Parks & Recreation</h4>
                        </div>
                        <ul>
                            <li>Lead groups of 10+ Elementary school children alone, or more when cooperating with co-workers</li>
                            <li>Ensured safety and happiness of children, and dealt with concerns from parents</li>
                        </ul>
                    </div>
                    <br></br><br></br><br></br>
                </div>
                <Button id={'menu'} name={"Return to Main Menu"} onClick={this.props.onClick}/>
            </div>
        );
    }
}