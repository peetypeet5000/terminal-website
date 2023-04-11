import './App.css';
import React from 'react';
import ResumeBody from './ResumeBody'
import FadeIn from 'react-fade-in'
import projectData from './projects.json'
import Project from './Project.js'
import About from './About.js'
import Contact from './Contact.js'


//Renders text given in props one character at a time, like a terminal
class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "_",
      n: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.addLetter(), 200
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  addLetter() {
    //while we have not used all the text from props
    if (this.props.text.length + 1 > this.state.n) {

      //update state with one new letter
      this.setState(function (state, props) {
        var newText = props.text.substr(0, state.n) + "_"


        return {
          text: newText,
          n: state.n + 1
        };
      });
    }
    //if text is complete, just alternate the flashing of the last character
    else {
      this.setState(function (state, props) {
        var newText = ""

        //if last char is the _, remove it and put a space, else add it
        if (state.text[state.text.length - 1] === "_") {
          newText = state.text.slice(0, state.text.length - 1) + " "
        } else {
          newText = state.text.slice(0, state.text.length - 1) + "_"
        }

        //update the state
        return {
          text: newText
        };
      });
    }
  }


  render() {
    return (
      <pre>{this.state.text}</pre>
    )
  }
}


class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <span>
          <Name text={">Peter LaMontagne"} />
        </span>
      </div>
    );
  }
}

class ProjectsBody extends React.Component {
  constructor(props) {
    super(props)

    //maps all projects from the json into a project component
    this.projectElements = projectData.map((project) =>
      <Project key={project.number} number={project.number} projDisc={project.projectDescription} extra={project.extraContent} title={project.projectTitle} projImg={project.projectImage} imgAlt={project.projectImageAlt} git={project.projectGithub} />
    );
  }

  render() {
    return (
      <div className="project-holder">
        {this.projectElements.reverse()}
      </div>
    );
  }
}


class Menu extends React.Component {
  render() {
    return (
      <div>
        <FadeIn>
          <Button id={'resume'} name={"Resume"} disc={"  ---  View my resume"} onClick={this.props.onClick} />
          <Button id={'projects'} name={"Projects"} disc={"  ---  See the various personal and class projects I've worked on"} onClick={this.props.onClick} />
          <Button id={'about'} name={"About"} disc={"  ---  Read more about me!"} onClick={this.props.onClick} />
          <Button id={'contact'} name={"Contact"} disc={"  ---  Connect with me"} onClick={this.props.onClick} />
        </FadeIn>
      </div>
    );
  }

}

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.isHover = this.isHover.bind(this);
    this.state = {
      hover: false
    }
  }

  //needed to be bound in constructor
  isHover() {
    this.setState({
      hover: true
    });
  }

  //example of syntax with no bind
  notHover = (event) => {
    this.setState({
      hover: false
    });
  }


  render() {
    if (this.state.hover === true) {
      return (
        <div onPointerEnter={this.isHover} onPointerLeave={this.notHover} onClick={(event) => this.props.onClick(event, this.props.id)} className="selected menu-button" >{this.props.name}{this.props.disc}</div>
      );
    } else {
      return (
        <div onPointerEnter={this.isHover} onPointerLeave={this.notHover} onClick={(event) => this.props.onClick(event, this.props.id)} className="menu-button" >{this.props.name}{this.props.disc}</div>
      );
    }
  }
}


class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enabled: 'menu',
      title: "Main Menu"
    }
    this.innerBoxContent = this.getElement();
  }

  //used to pass to Buttons as onClick function. Updates state with active component
  menuOnClick = (event, id) => {
    console.log("Button", id, "Clicked")
    if (id === 'resume') {
      this.setState({
        enabled: 'resume',
        title: 'Resume'
      });
    } else if (id === 'menu') {
      this.setState({
        enabled: 'menu',
        title: 'Main Menu'
      });
    } else if (id === 'projects') {
      this.setState({
        enabled: 'projects',
        title: 'Projects'
      });
    } else if (id === 'about') {
      this.setState({
        enabled: 'about',
        title: 'About Me'
      });
    } else if (id === 'contact') {
      this.setState({
        enabled: 'contact',
        title: 'Contact'
      });
    }
  }

  getElement() {
    if (this.state.enabled === 'menu') {
      return (
        <div>
          <Menu onClick={this.menuOnClick} />
        </div>
      );
    } else if (this.state.enabled === 'resume') {
      return (
        <div>
          <ResumeBody />
        </div>
      );
    } else if (this.state.enabled === 'projects') {
      return (
        <div>
          <ProjectsBody />
        </div>
      );
    } else if (this.state.enabled === 'about') {
      return (
        <div>
          <About />
        </div>
      );
    } else if (this.state.enabled === 'contact') {
      return (
        <div>
          <Contact />

        </div>
      );
    }
  }

  render() {
    return (
      <div className="outer-menu-box">
        <div className="menu-box">
          <pre className="box-title">{this.state.title}</pre>
          {this.getElement()}
          {this.state.enabled !== 'menu' && <Button id={'menu'} name={"Return to Main Menu"} onClick={this.menuOnClick} />}
        </div>
      </div>
    );
  }
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  render() {
    return (
      <div>
        <video autoPlay muted loop playsInline id="background-vid">
          <source src="./compressed_bkg.mp4" type="video/mp4" />
        </video>
        <FadeIn delay="300" transitionDuration="800">
          <Header />
          <Body />
        </FadeIn>
      </div>
    );
  }
}

export default App;
