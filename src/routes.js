import React from 'react';
import { IndexRoute, Route, Redirect} from 'react-router';
import Master from './roots/Master'
import App from './roots/App'
import Home from './roots/App/Home'
import List from './roots/App/List'
import Category from './roots/App/Category'
import NYU from './roots/App/NYU'
import Event from './roots/Event'
import Login from './roots/Login'
import Signup from './roots/Signup'

export default (
  <Route component={Master}>
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/list' component={List} />
        <Route path='/category' component={Category} />
        <Route path='/nyu' component={NYU} />
    </Route>
    <Route path='/event/:eventId' component={Event} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Redirect from='*' to='/' />
  </Route>
);


