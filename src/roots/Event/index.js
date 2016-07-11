require('./Event.scss')
import React from 'react';
import Header from '../../components/Header';
import LeftNavigation from '../../components/LeftNavigation';
import EventView from '../../components/EventView';
// import Footer from '../../components/Footer';

class Event extends React.Component {
  constructor(){
    super()
  }

  componentWillMount() {
    this.computeLayout();
  }

  componentDidMount(){
    window.addEventListener('resize', ()=>this.computeLayout());
  }
  computeLayout(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    let margin = 5;

    let HeaderHeight = 70;
    let FooterHeight = 30;
    let LeftNavigationWidth = 60;

    let layout = {
      header: {
        position: 'fixed',
        top: 0,
        left: 0,
        width,
        height: HeaderHeight
      },
      leftNavigation: {
        position: 'fixed',
        top: HeaderHeight,
        left: 0,
        width: LeftNavigationWidth,
        height: height-HeaderHeight
      },
      mainPage: {
        position: 'fixed',
        top: HeaderHeight,
        left: 0,
        width: width,
        height: height-HeaderHeight
      },
      mainView: {
        marginTop:margin+30,
        marginLeft: 100,
        top: HeaderHeight,
        left: 0,
        width: width-160,
        fullHeight: height-HeaderHeight-30,
        Maxheight: height-HeaderHeight-30
      },
      footer: {
        left:0,
        width,
        height: FooterHeight
      }
    }
    this.setState({layout});
  }
  render() {
  	let layout = this.state.layout;
    return (
      <div className='app'>
				<Header style={layout.header} />
        <div className='MainPage' style={layout.mainPage}>
          <EventView style={layout.mainView} />
        </div>
        <LeftNavigation style={layout.leftNavigation} />
      </div>
    );
  }
}

Event.defaultProps = {
};

export default Event;
