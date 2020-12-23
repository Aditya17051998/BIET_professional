import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { deletePost, fetchPosts } from '../actions/post';

class Postlist extends Component {
    componentDidMount() {
      this.props.dispatch(fetchPosts());
      
    }
    // componentDidUpdate(prevProps, prevState) {
    //   this.props.dispatch(fetchPosts());
      
    // }
    
    
      handleDelete=async (postId)=>{
      await this.props.dispatch(deletePost(postId));
      await this.props.dispatch(fetchPosts());
      console.log('postidhere',postId);

    }
    render() {
        const {post,auth}=this.props;
        console.log('post_list',post);
        return (
            <div className="posts-list">
          {post.map(post=>(
              <div className="post-wrapper" key={post._id}>
                <div className="post-header">
                
                  <div className="post-avatar">
                  <Link to={`/user/profile/${post.user._id}`}><img src="https://www.flaticon.com/svg/static/icons/svg/2747/2747872.svg"/></Link>
                    <div>
                       <span className="post-author">{post.user.name}</span>
                       <span className="post-time">a min ago</span>

                    </div>
                  </div>
                  {post.user._id===auth.user._id && (
                         <button style={{float:"right"}} onClick={(e)=>this.handleDelete(post._id)}>delete Post</button>
                       )}
                  <div className="post-content">{post.content}</div>
                  {/* <div className="post-actions">
                    <div className="post-like">
                      <img src="https://www.flaticon.com/svg/static/icons/svg/1077/1077035.svg"/>
                      <span>{post.likes.length}</span>
                    </div>
                    <div className="post-comments-icon">
                      <img src="https://www.flaticon.com/svg/static/icons/svg/1380/1380338.svg"/>
                      <span>{post.comments.length}</span>
                    </div>
                  </div>
                  <div className="post-comment-box">
                    <input placeholder="start typing..."/>
                  </div>

                  <div className="post-comments-list">
                    <div className="post-comment-item">
                      <div className="post-comment-header">
                        <span className="post-comment-author">Bill</span>
                        <span className="post-comment-time">a minute ago</span>
                        <span className="post-comment-like">22</span>
                      </div>
                      <div className="post-comment-content">
                        random comment
                      </div>

                    </div>
                  </div> */}

                </div>
              </div>
            ))}
        </div>
        );
    }
}

function mapStateToProps(state){
  return {
      auth:state.auth,
      post:state.post,
  };
}
export default connect(mapStateToProps)(Postlist);
