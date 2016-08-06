require('./Login.scss')
import React, {Component} from 'react';
import Button from '../../components/_primitives/Button'
import BigInput from '../../components/_primitives/BigInput'
import { browserHistory } from 'react-router';

class Login extends Component{
	constructor() {
    super()
    this.state = {
      user: '',
      password: '',
      error: ''
    }
  }
	render(){
		return(
			<div className="login">
        <div className="login-main-window">
        	<div className="login-logo">100 NYU</div>
          <div className="login-input"><BigInput placeholder="email or username"/></div>
          <div className="login-input"><BigInput placeholder="password"/></div>
          <div className="login-signin"><Button>Login</Button></div>
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