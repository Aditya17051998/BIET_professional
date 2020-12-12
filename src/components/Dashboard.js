import React, { Component } from 'react';
import UserDashBoard from './UserDashBoard';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard" style={{height:"100vh",width:"30vw",border:"1px solid black",display:"flex",flexDirection:"column"}}>
                        <div className="dashboard-header" style={{height:"10vh"}}>
                            <h1 style={{marginLeft:"10px"}}>get connected</h1>
                        </div>
                        <div className="dashboard-item-container" style={{height:"90vh"}}>
                            <UserDashBoard userslist={this.props.userslist}/>
                        </div>

            </div>
        );
    }
}

export default Dashboard;