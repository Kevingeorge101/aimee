import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';

import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom'
import UserProfile from './components/UserProfile';
import Diagnose from './components/Diagnose';
import Appointments from './components/Appointments';

const routing = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/userprofile" component={UserProfile} />
    <Route path="/diagnose" component={Diagnose} />
    <Route path="/appointments" component={Appointments} />

  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
