import Art from '@components/content/art';
import Code from '@components/content/code';
import Haiku from '@components/content/haiku';
import PatchDay from '@components/content/patchday';
import Header from '@components/header';
import Socials from '@components/socials';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" exact component={Haiku} />
      <Route path="/haiku" component={Haiku} />
      <Route path="/code" component={Code} />
      <Route path="/art" component={Art} />
      <Route path="/patchday" component={PatchDay} />
    </Switch>
    <Socials />
  </div>
);

export default hot(module)(App);
