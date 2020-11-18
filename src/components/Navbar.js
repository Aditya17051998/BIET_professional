import React, { Component } from 'react';
import Register from './Signup';
import SignIn from './SignIn';
import SignUp from './Signup';
import Register from './Register';
import SignIn from './SignIn';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="logo-icon">
               <img src='https://www.flaticon.com/svg/static/icons/svg/3600/3600910.svg'/>
                </div>
                <div className="SignUp"><SignUp/></div>
                <div className="SignIn"><SignIn/></div>
                <div className="logo-icon"> logo icon

                </div>
                
                <Register />
                <SignIn />
                
            </div>
        );
    }
}

export default Navbar;