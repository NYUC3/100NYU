require('./MainView.scss');
import { browserHistory } from 'react-router';
import React, {Component} from 'react';
let imgs = ['../../images/icon/ConeyIsland.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png', '../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png', '../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png', '../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png']
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
shuffle(imgs);


class MainView extends Component{
	render(){
		let style = this.props.style;
		let btnStyle = {
			marginRight: (style.width-80)/11-80,
			marginBottom: (style.Maxheight-5*90)/4
		}
		return(
			<div className="MainView" style={style}>
				{imgs.map(function(src, index){
					return(<img className='btn' src={src} key={index} style={btnStyle} onClick={()=>browserHistory.push('/event')}/>)
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
