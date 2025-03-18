import Art from '@components/content/art';
import Dev from '@components/content/dev';
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
      <Route path="/俳句" component={Haiku} />
      <Route path="/dev" component={Dev} />
      <Route path="/art" component={Art} />
      <Route path="/patchday" component={PatchDay} />
    </Switch>
    <Socials />
  </div>
);

export default hot(module)(App);
