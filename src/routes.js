import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';
import Master from './roots/Master'
import App from './roots/App'
// import Login from './roots/Login'

export default (
  <Route path='/' component={Master} >
    <IndexRoute component={App} />
    <Route path='/app' component={App} />
    // <Redirect from='*' to='/' />
  </Route>
);

