import React, { Component } from 'react';
import {login} from '../actions/auth'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';



class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        };
    }
    emailHandler=(e)=>{
        this.setState({
            email:e.target.value,
        });

    }
    passHandler=(e)=>{
        this.setState({
            password:e.target.value,
        })

    }
    handleFormSubmit=(e)=>{
        e.preventDefault();
        const {email,password} = this.state;
        console.log(email,password);
        if(email && password){
            this.props.dispatch(login(email,password));
        }
    }
    

    render() {
         const {isLoggedIn,inProgress} = this.props.auth;
         if(isLoggedIn){
             return <Redirect to="/user/home" />;
         }
        return (
            <form className="SignIn">

                <input type="email" placeholder="enter your email" onChange={this.emailHandler} value={this.state.email}/>
                <input type="password" placeholder="enter your password" onChange={this.passHandler} value={this.state.password}/>
                {inProgress?<button type="submit" onClick={this.handleFormSubmit} disabled>login...</button>:
                <button type="submit" onClick={this.handleFormSubmit}>login</button>
                }

            </form>
                
        );
    }
}

function mapStateToProps(state){
    return {
        auth:state.auth,
    };
}
export default connect(mapStateToProps)(SignIn);