require('./Signup.scss')
import React, {Component} from 'react';
import Button from '../../components/_primitives/Button'
// import BigInput from '../../components/_primitives/BigInput'
import AuthActions from '../../actions/AuthActions'
import AuthStore from '../../stores/AuthStore'

class Signup extends Component{
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: ''
    }
    this.EmailChange = this.EmailChange.bind(this);
    this.PasswordChange = this.PasswordChange.bind(this);
    this.signup = this.signup(this);  
  }

  EmailChange(e) {
     this.setState({email: e.target.value});
  }

  PasswordChange(e) {
     this.setState({password: e.target.value});
  }

  signup(){
    AuthActions.signUserUp(this.state.email, this.state.password);
  }

  render(){
    return (
      <div className="signup">
        <div className="signup-main-window">
          <div className="signup-logo">100 NYU</div>
          <div className="signup-input"><input type="text" name="email" placeholder="Email" onChange={this.EmailChange}/></div>
          <div className="signup-input"><input type="password" name="password" placeholder="Password" onChange={this.PasswordChange}/></div>
          <div className="signup-button"><Button onClick={this.signup}>Signup</Button></div>
          
          {this.state.error && <div className="error signup-error">{this.state.error}</div>}
        </div>
      </div>
    )
  }
}

export default Signup;