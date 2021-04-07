import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { render } from '@testing-library/react';
import React from 'react';


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
      () => this.addLetter(), 500
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

class Terminal extends React.Component {

  render() {
    return (
      <div className="terminal">
        <pre><span className="terminalUser">peetypeet@peter-desktop~: </span>This is a terminal</pre>
      </div>
    );
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
          <Header />
          <div>
            <Terminal />
          </div>
        </div>
    );
  }
}

export default App;
