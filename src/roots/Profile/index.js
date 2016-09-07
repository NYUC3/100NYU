require('./Profile.scss')
import React from 'react';
import Header from '../../components/Header';
import AuthStore from '../../stores/AuthStore'
import UserActions from '../../actions/UserActions'
// import Footer from '../../components/Footer';

let userUrl = 'http://localhost:1337/api/users/';

class ProfilePage extends React.Component {
  constructor(){
    super()
    this.state = {
      userId: AuthStore.getUserId(),
      first: AuthStore.getUserFirstName(),
      last: AuthStore.getUserLastName(),
      upcomingEvents: [],
      savedEvents: []
    }
  }

  componentWillMount() {
    this.computeLayout();
        const _this = this;
    fetch(`${userUrl}${this.state.userId}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }).then(function(response) {
      return response.json();
    }).then(function(j) {
      console.log('j', j)
      _this.setState({
        upcomingEvents: j.eventsToGo,
        savedEvents:j.savedEvents
      })
    });
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
    let UpcomingEvents = this.state.upcomingEvents.map(event => {
      return <div className="eventItem">{event.title}</div>
    })
    let SavedEvents = this.state.savedEvents.map(event => {
      return <div className="eventItem">{event.title}</div>
    })
    return (
      <div className='app'>
        <Header style={layout.header} />
        <div className='MainPage' style={layout.mainPage}>
          <div className="username">{this.state.first} {this.state.last}</div>
          <div className="eventCategories">
            <div>Upcoming Events</div>
                {UpcomingEvents}
            <div>Saved Events</div>
                {SavedEvents}
            <div>Past Events</div>
          </div>  
        </div>
      </div>
    );
  }
}

export default ProfilePage;