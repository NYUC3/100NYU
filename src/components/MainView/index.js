require('./MainView.scss');
import React from 'react';
let imgs = ['../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png', '../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png','../../images/icon/TEDNYU.png', '../../images/icon/Swimming.png', '../../images/icon/Acapella.png', '../../images/icon/StreetPerform.png', '../../images/icon/CentralPark.png', '../../images/icon/StatueLiberty.png', '../../images/icon/Taxi.png', '../../images/icon/Celebrity.png', '../../images/icon/DosaCart.png', '../../images/icon/ShakeShack.png']
class MainView extends React.Component{
	render(){
		let style = this.props.style;
		let btnStyle = {
			marginRight: (style.width-10*90)/10,
			marginBottom: (style.Maxheight-5*90)/4
		}
		return(
			<div className="MainView" style={style}>
				{imgs.map(function(src, index){
					return(<img className='btn' src={src} key={index} style={btnStyle}/>)
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
