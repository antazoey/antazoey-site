import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Jumbotron from './components/jumbotron';
import Resume from './components/resume';
import PDSite from './components/pdsite';
import PatchDay from './components/patchday';
import Art from './components/art';

const App = () => (
  <div>
    <Jumbotron title="Juliya Smith" />
    <div>
      <Switch>
        <Route path="/" exact component={Resume} />
        <Route path="/web" component={PDSite} />
        <Route path="/mobile" component={PatchDay} />
        <Route path="/art" component={Art} />
      </Switch>
    </div>
  </div>
);

export default hot(module)(App);
