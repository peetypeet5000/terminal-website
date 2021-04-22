import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { render } from '@testing-library/react';
import React from 'react';
import ResumeBody from './ResumeBody'


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
    console.log(this.state.n)

    //while we have not used all the text from props
    if(this.props.text.length + 1 > this.state.n) {
      
      //update state with one new letter
      this.setState(function(state, props) {
        var newText = props.text.substr(0, state.n) + "_"


        return {
          text: newText,
          n: state.n + 1
        };
      });
    } 
    //if text is complete, just alternate the flashing of the last character
    else {
      this.setState(function(state, props) {
        var newText = ""

        //if last char is the _, remove it and put a space, else add it
        if(state.text[state.text.length - 1] == "_") {
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
          <Name text={">Peter LaMontagne"}/>
        </span>
      </div>
    );
  }
}


class Menu extends React.Component {
  constructor(props){
    super(props)
  }

  onClick = (event, id) => {
    console.log(event);
    console.log("Button", id, "Clicked")
  }


  render() {
    return(
      <div className="outer-menu-box">
        <pre className="box-title">Main Menu</pre>
        <div className="menu-box">
          <Button id={1} name={"Button 1"} onClick={this.onClick}/>
          <Button id={2} name={"Button 2"} onClick={this.onClick}/>
          <Button id={3} name={"Button 3"} onClick={this.onClick}/>
        </div>
      </div>
    );
  }

}

class Button extends React.Component {
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
    if(this.state.hover == true) {
      return (
        <div onPointerEnter={this.isHover} onPointerLeave={this.notHover} onClick={(event) => this.props.onClick(event, this.props.id)} className="selected menu-button" >This is a selectable line of text --- {this.props.name}!</div>
      );
    } else {
      return(
        <div onPointerEnter={this.isHover} onPointerLeave={this.notHover} className="menu-button" >This is a selectable line of text --- {this.props.name}!</div>
      );
    }
  }
}


class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enabled: 'menu'
    }
  }
  
  render() {
    return (
      <div>
        <Menu />
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
        <Header />
        <Menu />
        <ResumeBody />
      </div>
    );
  }
}

export default App;
