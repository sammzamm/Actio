import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Events from './components/Events';
import Profile from './components/Profile';
import Signup from './components/signup';
import SignIn from './components/SignIn';
import EventView from './components/eventView.js';
import NewEvent from './components/NewEvent';

import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div className="main">
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/events" component={Events}></Route>
      <Route exact path="/events/:id" component={EventView}></Route>
      <Route exact path="/events/new" component={NewEvent}></Route>
      <Route exact path="/users/:id" component={Profile}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/signin" component={SignIn}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
