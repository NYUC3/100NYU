require('./App.scss')
import React from 'react';
import Header from '../../components/Header';
import LeftNavigation from '../../components/LeftNavigation';
let eventsUrl = 'http://localhost:1337/api/events';
// import Footer from '../../components/Footer';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      events: []
    }
  }

  getData(path){
    const _this = this;
    path = (path==undefined)?'':path
    fetch(`${eventsUrl}${path}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }).then(function(response) {
      return response.json();
    }).then(function(j) {
      _this.setState({
        events: j
      })
    });
  }

  componentWillMount() {
    this.computeLayout();
    this.getData(this.props.path);
  }
  componentWillUpdate(){
    this.getData(this.props.path);
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
        width: width-40,
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
    let childrenWithProps = React.Children.map(this.props.children,(child)=>
      React.cloneElement(child, {eventsData: this.state.events, styleData=})
    );
    return (
      <div className='app'>
				<Header style={layout.header} />
        <div className='MainPage' style={layout.mainPage}>
          <div className='MainView' style={layout.mainView}>
            {this.props.children}
          </div>
        </div>
        <LeftNavigation style={layout.leftNavigation} />
      </div>
    );
  }
}

<EventList eventsData={this.state.events} styleData={style}/>

App.defaultProps = {
};

export default App;
