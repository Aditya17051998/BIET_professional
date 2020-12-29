import React, { Component } from 'react';
import Footer from './Footer';
import {BrowserRouter as Router,Link,Redirect,Route,Switch} from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import Register from './Register';
import jwt_decode from 'jwt-decode';
import authenticate from '../actions/auth';
import {connect} from 'react-redux';
import User_home from './User_home';
import { fetchPosts } from '../actions/post';
import Edit_user from './Edit_user';
import UserProfile from './UserProfile';
import Navbar_home from './Navbar_home';
import { fetchFriends } from '../actions/friends';
import {fetchAlumini, fetchDashboard, fetchUsers} from '../actions/UserDashBoard';
import DashBoard_page from './DashBoard_page';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css.map";

const PrivateRoute =(props)=>{
    const {path,component: Component ,isLoggedIn} = props;
    return <Route path={path} render={(props)=>{
        return isLoggedIn?<Component {...props}/>:<Redirect to="/signIn"/>;
    
      }} />

}

class App extends Component {
    componentDidMount() {
        //this.props.dispatch(fetchPosts());
        this.props.dispatch(fetchUsers());
        this.props.dispatch(fetchDashboard(0));
        this.props.dispatch(fetchAlumini());
        this.props.dispatch(fetchFriends());
        
        const token = localStorage.getItem('token');

        if(token){
        const decode = jwt_decode(token);
        console.log('decode',decode);
        
        
        this.props.dispatch(authenticate({
         email:decode.email,
         name:decode.name,
         _id:decode._id,
         avatar:decode.avatar,
         skills:decode.skills,

        }));
        
        
        

       }

       
    }

    
    
    render() {
        const {isLoggedIn,inProgress} = this.props.auth;
        
        return (
            <Router>
                <div className="App">
                   <Navbar_home />
                   <Switch>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/signIn" component={SignIn} />
                     <Route exact path="/signUp" component={Register} />
                     <Route exact path="/user/home" component={User_home} />
                     <Route exact path="/home/dashboard" component={DashBoard_page} />
                     <PrivateRoute path="/user/edit" component={Edit_user} isLoggedIn={isLoggedIn} />
                     <PrivateRoute path="/user/profile/:userId" component={UserProfile} isLoggedIn={isLoggedIn} />
                 
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
