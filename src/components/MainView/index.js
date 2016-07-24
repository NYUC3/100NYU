require('./MainView.scss');
import { browserHistory } from 'react-router';
import React, {Component} from 'react';
let eventsUrl = 'http://localhost:1337/api/events';

class Event extends Component {
  constructor(){
    super();
    this.state={
      titleLeft: '0px',
      titleTop: '0px'
    }
    // this.onMouseMove = this.onMouseMove.bind(this);
  }
  // onMouseMove(e){
  //   var x = e.layerX, y = e.layerY;
  //   this.setState({titleLeft: x +'px',titleTop: y+'px'});
  // }

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

class EventList extends Component {

  render(){
    let btnStyle = {
        marginRight: (this.props.styleData.width-80)/11-80,
        marginBottom: (this.props.styleData.Maxheight-5*90)/4
    };
    let eventNodes = this.props.eventsData.map(function(event, index){
      return(
        <Event style={btnStyle} key={index} photo={event.photo} id={event._id}>
          {event.title}
        </Event>
      );
    });
    return(
      <div className="EventList">
        {eventNodes}
      </div>
    )
  }
}


class MainView extends Component{
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

  componentWillMount(){
    this.getData(this.props.path);
  }
  componentWillUpdate(){
    this.getData(this.props.path);
  }

	render(){
		let style = this.props.style;
		return(
			<div className="MainView" style={style}>
        <EventList eventsData={this.state.events} styleData={style}/>
			</div>
		)
	}

	handleScroll() {
    this.setState({
      height: 10
    });
  }
}

export default MainView;
