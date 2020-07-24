import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../actions/posts';
import Comment from './Comment';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handleAddComment = (e) => {
    const { comment } = this.state;
    const { post } = this.props;
    if (e.key === 'Enter') {
      console.log('hit enter', comment, post._id);
      this.props.dispatch(createComment(comment, post._id));

      this.setState({
        comment: '',
      });
    }
  };
  handleOnCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  render() {
    const { post } = this.props;
    const { comment } = this.state;

    const id = post._id;
    return (  
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
            <input
              placeholder="Start typing a comment"
              onChange={this.handleOnCommentChange}
              onKeyPress={this.handleAddComment}
              value={comment}
            />
          </div>
          <div className="post-comments-list">
            {post.comments.map((comment) => (
              <Comment comment={comment} key={comment._id} postId={post._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
Post.protoTypes = {
  post: PropTypes.object.isRequired,
};

export default connect()(Post);
