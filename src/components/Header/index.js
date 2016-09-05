require('./Header.scss');
import React from 'react';
import { browserHistory } from 'react-router';
import cx from 'classname';
import AuthStore from '../../stores/AuthStore'
import AuthActions from '../../actions/AuthActions'

class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			authenticated: AuthStore.isAuthenticated()
		}
		this.logout = this.logout.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	componentWillMount(){
		AuthStore.addChangeListener(this.onChange);
	}

	componentWillUnmount(){
		AuthStore.removeChangeListener(this.onChange);
	}

	onChange(){
		this.setState({
			authenticated: AuthStore.isAuthenticated()
		})
	}

    logout(){
      AuthActions.logUserOut();
      this.setState({authenticated: false});
    }

	render() {
		let {style} = this.props;
		return (
			<div className='Header' style={style}>
				<div className='Container'>
					<div className='Brand'>
						<span className='home' onClick={()=>browserHistory.push('/')}>100NYU</span>
					</div>
					<div className="Login">
					{!this.state.authenticated ? (
						<span className='Link' onClick={()=>browserHistory.push('/login')}>Log in</span>
					):(
						<span className='Link'>Welcome!</span>
					)}  
					{!this.state.authenticated ? (
						<span className={cx('Link', 'Highlight')} onClick={()=>browserHistory.push('/signup')}>Sign up</span>
					):(
						<span className={cx('Link', 'Highlight')} onClick={this.logout}>Log out</span>
					)}
				 	</div>
			 	</div>
			</div>
		)
	}
}

export default Header