import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { render } from '@testing-library/react';
import React from 'react';


class Terminal extends React.Component {

  render() {
    return (
      <div class="terminal">
        <pre>Terminal Test.</pre>
      </div>
    );
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
        <body>
          <Terminal />
        </body>
      </div>
    );
  }
}

export default App;
