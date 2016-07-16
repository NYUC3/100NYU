require('./MainView.scss');
import { browserHistory } from 'react-router';
import React, {Component} from 'react';
import _ from 'lodash';
let eventsUrl = 'http://localhost:1337/api/events/';

class MainView extends Component{
  constructor(){
    super();
    this.state={
      events: []
    }
  }
  componentWillMount(){
    const _this = this;
    fetch(eventsUrl,{
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

	render(){
		let style = this.props.style;
    let {events} = this.state;
    let imgs = _.map(events, 'photo')
		let btnStyle = {
			marginRight: (style.width-80)/11-80,
			marginBottom: (style.Maxheight-5*90)/4
		}
		return(
			<div className="MainView" style={style}>
				{imgs.map(function(src, index){
          let id = _.find(events,  function(obj) {return obj.photo==src})['_id'];
					return(<img className='btn' src={`'../../images/icon/${src}`} key={index} style={btnStyle} onClick={()=>browserHistory.push(`/event/${id}`)}/>)
				})}
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
