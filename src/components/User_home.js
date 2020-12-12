import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import Friends from './Friends';
import Postlist from './Postlist';
import Create_post from './Create_post';
import userslist from '../reducers/userslist';


class User_home extends Component {
    render() {
       
        const {auth,post,friends,suggestion} = this.props;

        if(!auth.isLoggedIn){
            return <Redirect to="/signIn" />;
        }
        
        return (
          <div style={{height:"73vh",overflowY:"scroll"}}>
            <Create_post />
            <Postlist post={post} />
            <Friends  friends={friends} suggestion={suggestion}/>
            
          </div>
          
        );
    }
}

function mapStateToProps(state){
    return {
        auth:state.auth,
        post:state.post,
        friends:state.friends,
        suggestion:state.userslist,
    };
}
export default connect(mapStateToProps)(User_home);