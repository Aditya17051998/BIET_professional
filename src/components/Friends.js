import React, { Component } from 'react';
import {connect} from 'react-redux';
import Friendlist from '../components/Friendlist';
import Suggestion from '../components/Suggestion';

class Friends extends Component {
    render() {
        const {friends,suggestion}=this.props;
        console.log('friends list here',friends);
        return (
            <div className="friend_list" style={{height:"71.8vh",overflowY:"scroll",overflowX:"hidden"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <h1 style={{background:"green",color:"white",height:"10vh",paddingLeft:"10px"}}>Friends</h1>
                    <div style={{marginTop:"-10px",height:"70vh",backgroundColor:"rgb(153, 204, 255)",overflowY:"scroll"}}>
                        {
                            
                                friends.map((friend)=>(
                                    <Friendlist friend={friend} key={friend._id}/>
                                
                              ))
                            
                            
                        }

                    </div>

                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <h1 style={{background:"green",height:"10vh",paddingLeft:"10px",color:"white"}}>Suggestions</h1>
                    <div style={{height:"70vh",border:"1px solid blue",backgroundColor:"rgb(153, 204, 255)", marginTop:"-10px",overflowY:"scroll"}}>
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