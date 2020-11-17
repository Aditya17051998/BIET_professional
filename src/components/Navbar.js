import React, { Component } from 'react';
import Register from './Register';
import SignIn from './SignIn';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
                <div className="Navbar">
                   <div className="logo-icon"> 
                    logo icon
                   </div>
                
                   <Link to="/signIn">SignIn</Link>
                   <Link to="/signUp">SignUp</Link>
                   
                
                </div>
        );
    }
}

export default Navbar;