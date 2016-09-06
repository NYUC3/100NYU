require('./Profile.scss')
import React from 'react';
import Header from '../../components/Header';
import AuthStore from '../../stores/AuthStore'
// import Footer from '../../components/Footer';

class ProfilePage extends React.Component {
  constructor(){
    super()
    this.state = {
      username: AuthStore.getUserName()
    }
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
      mainPage: {
        position: 'fixed',
        top: HeaderHeight,
        width: width,
        height: height-HeaderHeight
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
          <div className="username">{this.state.username}</div>
          <div className="eventCategories">
            <div>Upcoming Events</div>
            <div>Saved Events</div>
            <div>Past Events</div>
          </div>  
        </div>
      </div>
    );
  }
}

export default ProfilePage;