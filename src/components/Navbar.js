import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';

class Navbar extends Component {
    
        log_out=(e)=>{
            e.preventDefault();
            localStorage.removeItem('token');
            this.props.dispatch(logout());
            
    
        }
    
    render() {
        const {auth} = this.props;
        //const {isLoggedIn,inProgress} = this.props.auth;
        return (
                <div className="Navbar">
                   <div className="logo-icon"> 
                    {/* <Link to="/">logo icon</Link> */}
                    logo icon
                   </div>
                   {!auth.isLoggedIn &&
                   (<div>
                       <Link to="/signIn">SignIn</Link>
                       <Link to="/signUp">SignUp</Link>
                   </div>)
                   }
                   
                {auth.isLoggedIn && 
                (<div>
                    <form>
                        <input type="text" placeholder="search a friend" />
                        <button type="submit">search</button>
                    </form>
                    <Link to="/user/edit"><h3>{auth.user.name}</h3></Link>
                    <Link onClick={this.log_out}>Logout</Link>
                </div>)
                }
           </div>
        );
    }
}

function mapStateToProps(state){
    return {
        auth:state.auth,
    };
}
export default connect(mapStateToProps)(Navbar);