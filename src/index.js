import React from 'react';
import { render } from 'react-dom';
// import { browserHistory, Router } from 'react-router';
import { Router } from 'react-router';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Route from './routes';

// Render the main component into the dom
render(
	<Router routes={Route} />,
  document.getElementById('app')
);
