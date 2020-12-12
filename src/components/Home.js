import React, { Component } from 'react';
import HomeSlideShow from './HomeSlideShow';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import logo from '../images/logo_name.png';
import UserDashBoard from './UserDashBoard';
import Alumini from './Alumini';
import Dashboard from './Dashboard';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            image_urls:["https://image.freepik.com/free-vector/office-background-video-conferencing_23-2148638212.jpg","https://img.freepik.com/free-vector/office-background-video-conferencing_23-2148662387.jpg?size=626&ext=jpg","https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"]

        }
    }

    render() {
        const {isLoggedIn,inProgress} = this.props.auth;
        console.log('aluminilist',this.props.alumini);
         if(isLoggedIn){
             return <Redirect to="/user/home" />;
         }
        return (
            <div className="Home">
                <div className="site-header">
                    <div className="site-header-content">
                    <marquee width="100%" direction="left" height="100px">
                      <h1>
                      welcome to biet Professiona coummunity.
                      </h1>
                    </marquee>

                    </div>
                    <HomeSlideShow image_urls={this.state.image_urls} />
                </div>
        <div className="main-section">
            <Alumini alumini={this.props.alumini}/>
            <div className="dashboard-and-page-content" style={{border:"1px solid black",display:"flex",position:"relative",top:"15px"}}>

                    <Dashboard userslist={this.props.userslist}/>

                    <div className="page-body" style={{height:"100vh",width:"68vw",display:"flex",flexDirection:"column"}}>
                        <div style={{display:"flex",flexDirection:"row"}}>
                            <h1 style={{height:"25vh",width:"30vw"}}>find job and internship </h1>
                            <div style={{height:"25vh",width:"35vw"}}>
                                <img style={{height:"20vh",width:"30vw"}} src="https://i.pinimg.com/originals/2d/6d/78/2d6d78cb202b3771de194b3a68be706c.jpg"/>
                           </div>
                       </div> 

                       <div style={{display:"flex",flexDirection:"row"}}>
                            <h1 style={{height:"25vh",width:"30vw"}}>learn new skills </h1>
                            <div style={{height:"25vh",width:"35vw",overflow:"hidden"}}>
                                <img style={{height:"20vh",width:"30vw"}} src="https://images.squarespace-cdn.com/content/v1/54c5833fe4b0afdbad29260b/1422807406972-PA0OUVLFNRRVRYO1851E/ke17ZwdGBToddI8pDm48kCXTj-Wg2hUyCvG2gzcUO0xZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIhOXlA9L12Qv-lL7yMcQywOLKXa8ZlKWbVYnhV3J29G8/LEARN.png"/>
                            </div>
                        </div>
                    </div>

            </div>

        </div>



                
                
                
</div>
        );
    }
}
function mapStateToProps(state){
    console.log('statelist all',state);
    return {
        auth:state.auth,
        post:state.post,
        userslist:state.userslist,
        alumini:state.alumini,
    };
}
export default connect(mapStateToProps)(Home);