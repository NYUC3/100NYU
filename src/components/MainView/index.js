require('./MainView.scss');
import { browserHistory } from 'react-router';
import React, {Component} from 'react';
import _ from 'lodash';
let eventsUrl = 'http://localhost:1337/api/events';

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
