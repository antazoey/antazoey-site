import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import TopicEnum from 'topic-enum';
import Jumbotron from './components/jumbotron';
import Resume from './components/resume';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTopic: TopicEnum.RESUME };
  }

  getTopic = () => {
    const { selectedTopic } = this.state;
    switch (selectedTopic) {
      case TopicEnum.RESUME:
        return <Resume />;
      default:
        return <hr />;
    }
  };

  render() {
    return (
      <div>
        <Jumbotron title="Juliya Smith" />
        {this.getTopic()}
      </div>
    );
  }
}

App.prototypes = {
  selectedTopic: PropTypes.object,
};

export default hot(module)(App);
