import React, { Component } from 'react';
import { connect} from 'react-redux';
import { startSingup, signup } from '../actions/auth';
import { Redirect } from 'react-router-dom';

class Register extends Component {
        constructor(props) {
          super(props);
          this.state = {
            email: '',
            password: '',
            name: '',
            confirmPassword: '',
            isAluminia:false,
          };
        }
      
        handleInputChange = (field, value) => {
          this.setState({
            [field]: value,
          });
        };
        handleAluminia=(e)=>{
          this.setState({
            isAluminia:true,
          })
        }
      
        onFormSubmit = (e) => {
          e.preventDefault();
          console.log('signup state',this.state);
          const { email, password, confirmPassword, name,isAluminia } = this.state;
      
          if (email && password && confirmPassword && name) {
            //this.props.dispatch(startSingup());
            ///// dispatch this signup action creater in which we call api
            
            this.props.dispatch(signup(email, password, confirmPassword, name,isAluminia));
          }
          
          
        };

    render() {
        
        const {isLoggedIn,error,inProgress} = this.props.auth;
         if(isLoggedIn){
             return <Redirect to="/user/home" />;
         }
        return (
            // <form className="Register">
            //     <input type="text" placeholder="enter your name"
            //     onChange={(e) => this.handleInputChange('name', e.target.value)}
            //     />
            //     <input type="email" placeholder="enter your email"
            //     onChange={(e) => this.handleInputChange('email', e.target.value)}
            //     />
            //     <input type="password" placeholder="enter your password"
            //     onChange={(e) => this.handleInputChange('password', e.target.value)}
            //     />
            //     <input type="password" placeholder="confirm password"
            //     onChange={(e) => this.handleInputChange('confirmPassword', e.target.value)}
            //     />
            //     <div>
            //     <input type="checkbox" onClick={this.handleAluminia}/><span>Register as alumini</span>
            //     </div>
            //     <button type="submit" onClick={this.onFormSubmit}>Register</button>
            // </form>
            <div className="register">
              <form className="Register">
              <h1><b>Create a new account</b></h1>
                <input className="inputbox" type="text" placeholder="Your name"
                onChange={(e) => this.handleInputChange('name', e.target.value)}
                /><br/>
                <input className="inputbox"  type="email" placeholder="Your email"
                onChange={(e) => this.handleInputChange('email', e.target.value)}
                /><br/>
                <input className="inputbox"  type="password" placeholder="Enter your password"
                onChange={(e) => this.handleInputChange('password', e.target.value)}
                /><br/>
                <input className="inputbox"  type="password" placeholder="Confirm password"
                onChange={(e) => this.handleInputChange('confirmPassword', e.target.value)}
                /><br/>
                <input type="checkbox" onClick={this.handleAluminia}/><span>Register as alumini</span><br/>
                {error && (
                    <div style={{color:"red"}}>{error}</div>
                )}
                <button type="submit" onClick={this.onFormSubmit}>Register</button>
            </form>
            </div>
        );
    }
}

/////to map store to component

const mapStateToProps = ({ auth }) => ({  
    auth,
  });
  
  export default connect(mapStateToProps)(Register);
