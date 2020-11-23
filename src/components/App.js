import React, { Component } from 'react';
import Footer from './Footer';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import SignIn from './SignIn';
import Register from './Register';
import jwt_decode from 'jwt-decode';
import authenticate from '../actions/auth';
import {connect} from 'react-redux';
import User_home from './User_home';
import { fetchPosts } from '../actions/post';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPosts());
        const token = localStorage.getItem('token');

        if(token){
        const decode = jwt_decode(token);
        console.log('decode',decode);
        
        this.props.dispatch(authenticate({
         email:decode.email,
         name:decode.name,
         _id:decode._id

        }));

       }
    }
    
    render() {
        const {isLoggedIn,inProgress} = this.props.auth;
        
        return (
            <Router>
                <div className="App">
                   <Navbar />
                   <Switch>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/signIn" component={SignIn} />
                     <Route exact path="/signUp" component={Register} />
                     <Route exact path="/user/home" component={User_home} />

                   </Switch>
                   

                   <Footer />

                </div>

            </Router>
                
        );
    }
}

function mapStateToProps(state){
    return {
        auth:state.auth,
    };
}
export default connect(mapStateToProps)(App);
