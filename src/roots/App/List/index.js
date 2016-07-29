require('./List.scss');
import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router'

class List extends Component {
  constructor(){
    super()
  }

  render(){
    let eventNodes = this.props.eventsData.map(function(event, index){
      return(
        <ListItem key={index} photo={event.photo} id={event.id} upvotes={event.upvotes} category={event.category}>
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
};


class ListItem extends React.Component {
  render(){
    let thumbnailStyle = this.props.style;
    let getEventDetail = function(){
      browserHistory.push(`/event/${this.props.id}`);
    };
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
              <span><Link to="/event/${this.props.id}">{this.props.children}</Link></span>
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
};

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
};

export default List;