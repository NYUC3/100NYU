require('./Footer.scss');
import React from 'react';

class Footer extends React.Component{
	render(){
		return(
			<div className="Footer" style={this.props.style}>
				<span className="text"> Supported By NYU C3 </span>
				<span className="text"> | </span>
				<span className="text"> Privacy policy </span>
				<span className="text"> | </span>
				<span className="text"> Term of service </span>
			</div>
		)
	}
}

export default Footer;
