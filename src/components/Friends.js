import React, { Component } from 'react';
import {connect} from 'react-redux';
import Friendlist from '../components/Friendlist';
import Suggestion from '../components/Suggestion';

class Friends extends Component {
    render() {
        const {friends,suggestion}=this.props;
        console.log('friends list here',suggestion);
        return (
            <div className="friend_list" style={{height:"73vh",overflowY:"scroll",overflowX:"hidden"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <h1>Friends</h1>
                    <div style={{height:"70vh",border:"1px solid blue",backgroundColor:"rgb(153, 204, 255)"}}>
                        {
                            
                                friends.map((friend)=>(
                                    <Friendlist friend={friend} key={friend._id}/>
                                
                              ))
                            
                            
                        }

                    </div>

                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <h1>Suggestions</h1>
                    <div style={{height:"70vh",border:"1px solid blue",backgroundColor:"rgb(153, 204, 255)"}}>
                    {
                            
                            suggestion.map((suggestion)=>(
                                <Suggestion suggestion={suggestion}/>
                            
                          ))
                        
                        
                    }

                    </div>

                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        friends:state.friends,
    };
}
export default connect(mapStateToProps)(Friends); 