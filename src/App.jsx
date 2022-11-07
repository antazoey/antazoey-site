import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import AboutJules from '@components/about';
import ViewController from '@components/viewcontroller';

const App = () => (
  <div>
    <ViewController title="Juliya Smith" />
    <Switch>
      <Route path="/" exact component={AboutJules} />
      <Route path="/about" component={AboutJules} />
      <Route path="/code" component={AboutJules} />
      <Route path="/art" component={AboutJules} />
    </Switch>
  </div>
);

export default hot(module)(App);
