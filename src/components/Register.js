import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSingup, signup } from '../actions/auth';

class Register extends Component {
        constructor(props) {
          super(props);
          this.state = {
            email: '',
            password: '',
            name: '',
            confirmPassword: '',
          };
        }
      
        handleInputChange = (field, value) => {
          this.setState({
            [field]: value,
          });
        };
      
        onFormSubmit = (e) => {
          e.preventDefault();
          const { email, password, confirmPassword, name } = this.state;
      
          if (email && password && confirmPassword && name) {
            this.props.dispatch(startSingup());
            this.props.dispatch(signup(email, password, confirmPassword, name));
          }
        };

    render() {
        return (
            <form className="Register">
                <input type="text" placeholder="enter your name"
                onChange={(e) => this.handleInputChange('name', e.target.value)}
                />
                <input type="email" placeholder="enter your email"
                onChange={(e) => this.handleInputChange('email', e.target.value)}
                />
                <input type="password" placeholder="enter your password"
                onChange={(e) => this.handleInputChange('password', e.target.value)}
                />
                <input type="password" placeholder="confirm password"
                onChange={(e) => this.handleInputChange('confirmPassword', e.target.value)}
                />
                <button type="submit" onClick={this.onFormSubmit}>Register</button>
            </form>
        );
    }
}

const mapStateToProps = ({ auth }) => ({
    auth,
  });
  
  export default connect(mapStateToProps)(Register);
