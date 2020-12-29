import React, { Component } from 'react';
import {connect} from 'react-redux';
import Friendlist from '../components/Friendlist';
import Suggestion from '../components/Suggestion';

class Friends extends Component {
    render() {
        const {friends,suggestion,auth}=this.props;
        // const index=suggestion.findIndex(friend=>friend._id===auth._id);
        // const newList = suggestion.splice(index, 1);
        

        console.log('friends list here',suggestion);
        return (
            <div className="friend_list" style={{height:"71.8vh",overflowY:"scroll",overflowX:"hidden"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <h1 style={{background:"green",color:"white",height:"10vh",paddingLeft:"10px"}}>Friends</h1>
                    <div style={{marginTop:"-10px",maxHeight:"70vh",backgroundColor:"rgb(153, 204, 255)",overflowY:"scroll"}}>
                        {
                            
                                friends.filter(sugg=>sugg._id!==auth.user._id).map((friend)=>(
                                    <Friendlist friend={friend} key={friend._id}/>
                                
                              ))
                            
                            
                        }

                    </div>

                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <h1 style={{background:"green",height:"10vh",paddingLeft:"10px",color:"white"}}>Suggestions</h1>
                    <div style={{maxHeight:"60vh",border:"1px solid blue",backgroundColor:"rgb(153, 204, 255)", marginTop:"-10px",overflowY:"scroll"}}>
                    {
                            
                            suggestion.filter(sugg=>sugg._id!==auth.user._id).map((suggestion)=>(
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
        auth:state.auth,
    };
}
export default connect(mapStateToProps)(Friends); 