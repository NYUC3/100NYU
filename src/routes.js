import React from 'react';
import { IndexRoute, Route, Redirect} from 'react-router';
import Master from './roots/Master'
import App from './roots/App'
import Event from './roots/Event'
import Login from './roots/Login'

export default (
  <Route path='/' component={Master} >
    <IndexRoute component={App} />
    <Route path='/app' component={App} />
    <Route path='/event/:eventId' component={Event} />
    <Route path='/nyu' component={App} />
    <Route path='/login' component={Login} />
    <Redirect from='*' to='/' />
  </Route>
);

