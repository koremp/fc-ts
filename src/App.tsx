import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import NotFoundPage from './page/NotFoundPage'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      {/* <Route path="/:group" component={} /> */}
      <Route component={NotFoundPage} />
    </Switch>
  );
}
