import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import Friends from './Friends';
import Postlist from './Postlist';


class User_home extends Component {
    render() {
       
        const {auth,post} = this.props;

        if(!auth.isLoggedIn){
            return <Redirect to="/signIn" />;
        }
        
        return (
          <div>
            <form className="make-post">
              <input type="text" placeholder="write something here"/>
              <button type="submit">Post</button>

            </form>
            <Postlist post={post} />
            <Friends />
            
          </div>
          
        );
    }
}

function mapStateToProps(state){
    return {
        auth:state.auth,
        post:state.post,
    };
}
export default connect(mapStateToProps)(User_home);