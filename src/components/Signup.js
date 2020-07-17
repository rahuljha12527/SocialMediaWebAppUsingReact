import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'; 
import { signup ,startSignUp, clearAuthState} from '../actions/auth';


class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirm_Password: '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());

  }
  

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    console.log('this.state', this.state);
    const { name, email, password, confirm_Password } = this.state;

    if (name && email && password && confirm_Password) {
      this.props.dispatch(startSignUp());
      this.props.dispatch(signup(name, email, password, confirm_Password));
    }
  };

  render() {
    const {inProgress,error,isLoggedin}=this.props.auth;

    if(isLoggedin){
      return <Redirect to="/" />
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign up</span>
        {error && <div className="alert error-dialog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => this.handleInputChange('name', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => this.handleInputChange('email', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => this.handleInputChange('password', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) =>
              this.handleInputChange('confirm_Password', e.target.value)
            }
          />
        </div>

        <div className="field">
          {inProgress ? (
            <button onClick={this.onFormSubmit} disabled={inProgress}>
              Signing up...
            </button>
          ) : (
            <button onClick={this.onFormSubmit}>Sign Up</button>
          )}
        </div>
      </form>
    );
  }
}

const mapStateToProps=({auth})=>({
    auth,
});
export default connect(mapStateToProps)(Signup);
