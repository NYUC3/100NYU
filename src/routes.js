import React from 'react';
import { IndexRoute, Route, Redirect} from 'react-router';
import Master from './roots/Master'
import App from './roots/App'
import Event from './roots/Event'

export default (
  <Route path='/' component={Master} >
    <IndexRoute component={App} />
    <Route path='/app' component={App} />
    <Route path='/event/:eventId' component={Event} />
    <Redirect from='*' to='/' />
  </Route>
);

