require('./List.scss');
import React, {Component} from 'react';
import { browserHistory } from 'react-router';
let eventsUrl = 'http://localhost:1337/api/events';

// import { Link } from 'react-router'

class List extends Component {
  getData(path){
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

  constructor(){
    super()
    let path = ''
    this.state = {
      events: []
    }
    this.getData(path)
  }

  render(){
    let eventsData = this.state.events
    let eventNodes = eventsData.map(function(event, index){
      return(
        <ListItem key={index} photo={event.photo} id={event._id} upvotes={event.upvotes} category={event.category}>
          {event.title}
        </ListItem>
      );
    });
    return (
      <ul className="List">
        {eventNodes}
      </ul>
    );
  }

  // handleScroll() {
  //   this.setState({
  //       height: 10
  //   });
  // }
}


class ListItem extends React.Component {
  render(){
    let thumbnailStyle = this.props.style;
    // let getEventDetail = function(){
    //   browserHistory.push(`/event/${this.props.id}`);
    // };
    return (
      <li className="ListItem">
          <div className="EventThumbnail">
            <img style={thumbnailStyle} src={`../../../images/icon/${this.props.photo}`} onClick={()=> browserHistory.push(`/event/${this.props.id}`)}/>
          </div>
          <div className="VoteButton">
            <ActionButton>Upvote</ActionButton>
          </div>
          <div className="TitleAndButtons">
            <div className="EventTitle">
              <span onClick={()=> browserHistory.push(`/event/${this.props.id}`)}>{this.props.children}</span>
            </div>
            <div className="ActionButtons">
                <ActionButton className="CommentButton">Comment</ActionButton>
                <ActionButton className="SaveButton">Save</ActionButton>
                <ActionButton className="ShareButton">Share</ActionButton>
                <span className="Tags">#{this.props.category}</span>
            </div>
          </div>
      </li>
    );
  }
}

class ActionButton extends React.Component {
  render(){
    return(
        <button className="ActionButton" >
          <div className="ButtonContainer">
             {this.props.children}
          </div>
        </button>
    );
  }
}

export default List;