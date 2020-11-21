import React, { Component } from 'react';
import HomeSlideShow from './HomeSlideShow';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            image_urls:["https://image.freepik.com/free-vector/office-background-video-conferencing_23-2148638212.jpg","https://img.freepik.com/free-vector/office-background-video-conferencing_23-2148662387.jpg?size=626&ext=jpg","https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"]

        }
    }

    render() {
        return (
            <div className="Home">
                Welcome to your BIET professional community
                <HomeSlideShow image_urls={this.state.image_urls} />
                <div>
                    <h1 style={{display:"inline-block",position:"relative",top:"-115px"}}>find job and internship </h1>
                    <div style={{display:"inline-block"}}>
                    <img src="https://i.pinimg.com/originals/2d/6d/78/2d6d78cb202b3771de194b3a68be706c.jpg"/>
                    </div>
                </div>

                <div>
                    <h1 style={{display:"inline-block",position:"relative",top:"-215px"}}>learn new skills </h1>
                    <div style={{display:"inline-block"}}>
                    <img src="https://images.squarespace-cdn.com/content/v1/54c5833fe4b0afdbad29260b/1422807406972-PA0OUVLFNRRVRYO1851E/ke17ZwdGBToddI8pDm48kCXTj-Wg2hUyCvG2gzcUO0xZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIhOXlA9L12Qv-lL7yMcQywOLKXa8ZlKWbVYnhV3J29G8/LEARN.png"/>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default Home;