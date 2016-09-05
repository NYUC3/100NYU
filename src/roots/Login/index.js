require('./Login.scss')
import React, {Component} from 'react';
import Button from '../../components/_primitives/Button'
// import BigInput from '../../components/_primitives/BigInput'
import { browserHistory } from 'react-router';
import AuthActions from '../../actions/AuthActions'
import AuthStore from '../../stores/AuthStore'

class Login extends Component{
	constructor() {
    super()
    this.state = {
      authenticated: AuthStore.isAuthenticated(),
      email: '',
      password: '',
      error: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleEmailChange(e) {
     this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
     this.setState({password: e.target.value});
  }

  login(){
    AuthActions.logUserIn(this.state.email, this.state.password);
    this.setState({authenticated: true});
  }

  // logout(){
  //   AuthActions.logUserOut();
  //   this.setState({authenticated: false});
  // }

	render(){
		return(
			<div className="login">
        <div className="login-main-window">
        	<div className="login-logo">100 NYU</div>
          <div className="login-input"><input type="text" name="email" placeholder="Email" onChange={this.handleEmailChange}/></div>
          <div className="login-input"><input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange}/></div>
          <div className="login-signin"><Button onClick={this.login}>Login</Button></div>
          <div className="login-signup">
          	Don't have an account yet? <a className="signup-link" onClick={()=>browserHistory.push('/signup')}>Sign up here</a>
          </div>
          {this.state.error && <div className="error login-error">{this.state.error}</div>}
        </div>
	    </div>
		)
	}
}

export default Login;