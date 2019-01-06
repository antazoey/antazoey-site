import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Jumbotron from './components/jumbotron';
import Resume from './components/resume';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Jumbotron title="Juliya Smith" />
        <Resume />
      </div>
    );
  }
}

export default hot(module)(App);
