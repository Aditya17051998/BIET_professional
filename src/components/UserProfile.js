import React, { Component } from 'react';
import { getUserProfile } from '../actions/user_profile';
import {connect} from 'react-redux';
import { addFriends } from '../actions/friends';

class UserProfile extends Component {
    
    componentDidMount() {

        const {match}=this.props;
        if(match.params.userId){
            this.props.dispatch(getUserProfile(match.params.userId));
            

        }

       
        
    }
    // componentDidUpdate(prevProps, prevState) {
    //     const {match:{params}}=this.props;
    //     console.log('params',params);
    //     // if(params.userId){
    //     prevProps.dispatch(getUserProfile(params.userId));
    // }
    
    handleAddFriend=(e)=>{
        this.props.dispatch(addFriends(this.props.match.params.userId));

    }
    
    
    render() {
        const {match:{params}}=this.props;
        console.log('params',params);
        // if(params.userId){
        //this.props.dispatch(getUserProfile(params.userId));
            

        // }
        
        
        return (
            <div>
                {this.props.profile.name}
                <button onClick={this.handleAddFriend} >add friend</button>
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
export default connect(mapStateToProps)(UserProfile);