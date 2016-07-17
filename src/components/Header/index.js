require('./Header.scss');
import React from 'react';
import { browserHistory } from 'react-router';
import cx from 'classnames';

class Header extends React.Component {
	render() {
		let {style} = this.props;
		return (
			<div className='Header' style={style}>
				<div className='Container'>
					<div className='Brand'>
						<span className='home' onClick={()=>browserHistory.push('/')}>100NYU</span>
					</div>
					<div className="Login">
					  <span className='Link' onClick={()=>browserHistory.push('/login')}>Log in</span>
				 	  <span className={cx('Link', 'Highlight')}>Sign up</span>
				 	</div>
			 	</div>
			</div>
		)
	}
}

export default Header