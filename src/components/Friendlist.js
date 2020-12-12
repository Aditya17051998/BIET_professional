import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getUserProfile } from '../actions/user_profile';

class Friendlist extends Component {
    render() {
        const {friend}=this.props;
        console.log(friend.to_user);
        this.props.dispatch(getUserProfile(friend));
        return (
            <div className="friendlist">
                 <h3>{friend.to_user.name}</h3>
                 <h6>{friend.to_user.email}</h6>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        auth:state.auth,
        post:state.post,
        profile:state.profile,
    };
}
export default connect(mapStateToProps)( Friendlist);