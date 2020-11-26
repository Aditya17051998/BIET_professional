import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPost} from '../actions/post';

class Create_post extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:'',
        };
    }
    postContent=(e)=>{
        this.setState({
            content:e.target.value,
        });

    };
  
    postSubmit=(e)=>{
        e.preventDefault();
        console.log('content here',this.state.content);
        this.props.dispatch(createPost(this.state.content));
        
    };
    

    render() {
        return (
            <form className="make-post">
              <input type="text" placeholder="write something here" onChange={this.postContent} value={this.state.content}/>
              <button type="submit" onClick={this.postSubmit}>Post</button>

            </form>
        );
    }
}

// function mapStateToProps(state){
//     return {
//         auth:state.auth,
//     };
// }
export default connect()(Create_post);