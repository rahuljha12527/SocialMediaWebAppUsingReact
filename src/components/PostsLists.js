import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PostsLists extends Component {
    render() {

        const {posts}=this.props;
        
        return (
            <div>
                 <div className="posts-list">
          {posts.map((post) => 
            <div className="post_wrapper" key={post._id}>
              <div className="post-header">
                <div className="post-avatar">
                  <Link to={`/user/${post.user._id}`}>
                  <img
                    src="https://images.cdn2.stockunlimited.net/clipart/businessman-avatar_1320436.jpg"
                    alt="user-pic"
                  />
                  </Link>

                  <div>
                    <span className="post-author">{post.user.name}</span>
                    <span className="post-time">a minute ago</span>
                  </div>
                </div>
                <div className="post-content">{post.content}</div>

                <div className="post_actions">
                  <div className="post-like">
                    <img
                      src="https://f0.pngfuel.com/png/7/748/facebook-like-emoji-clip-art-png-clip-art.png"
                      alt="likes-icon"
                    />
                    <span>{post.likes.length}</span>
                  </div>

                  <div className="post-comments-icon">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/flat-pro-database-set-1/32/comment-512.png"
                      alt="comments-icon"
                    />
                    <span>{post.comments.length}</span>
                  </div>
                </div>
                <div className="post-comment-box">
                  <input placeholder="Start typing a comment" />
                </div>
                <div className="post-comments-list">
                  <div className="post-comments-item">
                    <div className="post-comment-header">
                      <span className="post-comment-author">Bill</span>
                      <span className="post-comment-time">a minute ago</span>
                      <span className="post-comment-likes">22</span>
                    </div>

                    <div className="post-comment-content">
                        Random comment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div> 
            </div>
        );
    }
}

PostsLists.propTypes= {
  posts:PropTypes.array.isRequired,

};

export default PostsLists;