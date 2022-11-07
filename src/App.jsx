import AboutJules from '@components/about';
import MainContainer from '@components/main';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <MainContainer />
    <Switch>
      <Route path="/" exact component={AboutJules} />
      <Route path="/about" component={AboutJules} />
      <Route path="/code" component={AboutJules} />
      <Route path="/art" component={AboutJules} />
    </Switch>
  </div>
);

export default hot(module)(App);
