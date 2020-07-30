import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Jumbotron from './components/jumbotron';
import Resume from './components/resume';
import PDSite from './components/about';
import PatchDay from './components/code';
import Art from './components/art';

const App = () => (
  <div>
    <Jumbotron title="Juliya Smith" />
    <div>
      <Switch>
        <Route path="/" exact component={Resume} />
        <Route path="/about" component={PDSite} />
        <Route path="/code" component={PatchDay} />
        <Route path="/art" component={Art} />
      </Switch>
    </div>
  </div>
);

export default hot(module)(App);
