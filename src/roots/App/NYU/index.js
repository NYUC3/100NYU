require('./NYU.scss');
import { browserHistory } from 'react-router';
import React, {Component}from 'react';
let eventsUrl = 'http://localhost:1337/api/events';

class Event extends Component {
  constructor(){
    super();
    this.state={
      titleLeft: '0px',
      titleTop: '0px'
    }
  }

  render(){
    let btnStyle = this.props.style;
    let titleStyle = {left:this.state.titleLeft, right:this.state.titleTop};
    return (
      <div className="event">
        <img className="eventImg" style={btnStyle} src={`../../images/icon/${this.props.photo}`} onClick={()=>browserHistory.push(`/event/${this.props.id}`)}/>
        <span className="title" style={titleStyle}>{this.props.children}</span>
      </div>
    )
  }
}

class NYU extends Component {
  getData(path){
    console.log(path)
    let _this = this
    fetch(`${eventsUrl}${path}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }).then(function(response) {
      return response.json();
    }).then(function(j) {
      _this.setState({events: j})
    });
  }
  constructor(props){
    super(props)
    this.state = {
      events: []
    }
    
  }

  componentWillMount(){
    this.getData(this.props.route.path);
  }
  

  render(){
    let btnStyle = {
        marginRight: (this.props.styleData.width-80)/11-80,
        marginBottom: (this.props.styleData.Maxheight-5*90)/4
    };
    let eventsData = this.state.events
    let eventNodes = eventsData.map(function(event, index){
      return(
        <Event style={btnStyle} key={index} photo={event.photo} id={event._id}>
          {event.title}
        </Event>
      );
    });
    return(
      <div className="Home">
        {eventNodes}
      </div>
    )
  }

  handleScroll() {
    this.setState({
        height: 10
    });
  }
}


export default NYU;
