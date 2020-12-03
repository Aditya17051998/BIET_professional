import React, { Component } from 'react';

class Friends extends Component {
    render() {
        return (
            <div className="friend_list" style={{height:"73vh",overflowY:"scroll",overflowX:"hidden"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <h1>Friends</h1>
                    <div style={{height:"70vh",border:"1px solid blue"}}>

                    </div>

                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <h1>Suggestions</h1>
                    <div style={{height:"70vh",border:"1px solid blue"}}>

                    </div>

                </div>
            </div>
        );
    }
}

export default Friends;