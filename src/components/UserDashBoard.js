import React, { Component } from 'react';

class UserDashBoard extends Component {
    render() {
        const {userslist}=this.props;
        console.log("userslist",userslist);
        return (
            <div className="">
                {
                    userslist.map(user=>(
                     <div className="user-info">
                         <h3>{user.name}</h3>
                     <div className="user-skills">
                        <span>{user.email}</span>
                    </div>
                </div>
                    ))
                }
            </div>
        );
    }
}

export default UserDashBoard;