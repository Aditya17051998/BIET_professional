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
        // to clear input field after submit data
        this.setState({
            content:'',
        })
        
    };
    

    render() {
        return (
            
            <form className="make-post">
              <textarea style={{height:"10vh",width:"30vw"}} placeholder="write something here" onChange={this.postContent} value={this.state.content}/>
              <button style={{marginLeft:"2vw",background:"blue",color:"white",width:"6vw",height:"4vh",fontWeight:"500"}} type="submit" onClick={this.postSubmit}>Post</button>

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