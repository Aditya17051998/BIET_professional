import React, { Component } from 'react';
import Register from './Register';
import SignIn from './SignIn';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="logo-icon"> logo icon

                </div>
                
                <Register />
                <SignIn />
                
            </div>
        );
    }
}

export default Navbar;