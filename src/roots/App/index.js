require('./App.scss')
import React from 'react';
import Header from '../../components/Header';
import LeftNavigation from '../../components/LeftNavigation';
import MainView from '../../components/MainView';

class App extends React.Component {
  render() {
  	let width = window.innerWidth;
    let height = window.innerHeight;
    let margin = 5;

  	let HeaderHeight = 70;
    let LeftNavigationWidth = 70;

  	let layout = {
  		header: {
        position: 'fixed',
  			top: 0,
        left: 0,
  			width,
  			height: HeaderHeight
  		},
      leftNavigation: {
        margin,
        position: 'fixed',
        top: HeaderHeight,
        left: 0,
        width: LeftNavigationWidth,
        height: height-HeaderHeight-2*margin
      },
      mainView: {
        margin,
        position: 'fixed',
        top: HeaderHeight,
        left: LeftNavigationWidth+margin,
        width: width-LeftNavigationWidth-3*margin,
        height: height-HeaderHeight-2*margin
      }
  	}
    return (
      <div className="app">
				<Header style={layout.header} />
        <LeftNavigation style={layout.leftNavigation} />
        <MainView style={layout.mainView} />
      </div>
    );
  }
}

App.defaultProps = {
};

export default App;
