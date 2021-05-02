import React from 'react';
import FadeIn from 'react-fade-in';
import './Project.css'

export default class Project extends React.Component {
    render() {
        return (
            <div className="project-card">
                <FadeIn>
                    <h2>Project {this.props.number}: {this.props.title}</h2>

                    <div className="project-content">
                        <img className="project-image" src={this.props.projImg} alt={this.props.imgAlt}/>
                        <p className="project-text">
                            {this.props.projDisc}
                            {this.props.extra &&
                                <span><br/>Play the game <a href={this.props.extra}>here.</a></span>
                            }
                            <br/><br/>
                            See the GitHub repo for this project <a href={this.props.git}>here.</a>
                        </p>
                    </div>
                </FadeIn>
            </div>
        );    
    }
}
