import React, { Component } from 'react';
import { getUserProfile } from '../actions/user_profile';
import {connect} from 'react-redux';

class UserProfile extends Component {
    componentDidMount() {
        const {match}=this.props;
        if(match.params.userId){
            this.props.dispatch(getUserProfile(match.params.userId));

        }

       
        
    }
    
    render() {
        const {match:{params}}=this.props;
        console.log('params',params);
        
        
        return (
            <div>
                userProfile
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
export default connect(mapStateToProps)(UserProfile);