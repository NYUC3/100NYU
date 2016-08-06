require('./Signup.scss')
import React, {Component} from 'react';
import Button from '../../components/_primitives/Button'
import BigInput from '../../components/_primitives/BigInput'

class Signup extends Component{
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
			<div className="signup">
        <div className="signup-main-window">
        	<div className="signup-logo">100 NYU</div>
          <div className="signup-input"><BigInput placeholder="email or username"/></div>
          <div className="signup-input"><BigInput placeholder="password"/></div>
          <div className="signup-button"><Button>Signup</Button></div>
          
          {this.state.error && <div className="error signup-error">{this.state.error}</div>}
        </div>
	    </div>
		)
	}
}

export default Signup;