import React, { Component } from 'react';
import UserDashBoard from './UserDashBoard';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard" style={{height:"100vh",width:"30vw",borderRight:"2px solid black",display:"flex",flexDirection:"column"}}>
                        <div className="dashboard-header" style={{height:"10vh"}}>
                            <h1 style={{marginLeft:"10px"}}>get connected</h1>
                        </div>
                        <div className="dashboard-item-container" style={{height:"80vh",overflow:"scroll"}}>
                            <UserDashBoard userslist={this.props.userslist}/>
                        </div>
                        <Link to="/home/dashboard" style={{marginTop:"5vh",marginLeft:"22vw"}}>View More</Link>
                        

            </div>
        );
    }
}

export default Dashboard;