require('./MainView.scss');
import { browserHistory } from 'react-router';
import React, {Component} from 'react';
import _ from 'lodash';
let eventUrl = 'http://localhost:1337/api/events/';
// let imgs = ['../../images/icon/ConeyIsland.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png', '../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png', '../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png', '../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png']

// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex ;
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }
// shuffle(imgs);


class MainView extends Component{
  constructor(){
    super();
    this.state={
      events: []
    }
  }
  componentWillMount(){
    const _this = this;
    fetch(eventUrl,{
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
					return(<img className='btn' src={`'../../images/icon/${src}`} key={index} style={btnStyle} onClick={()=>browserHistory.push('/event')}/>)
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
