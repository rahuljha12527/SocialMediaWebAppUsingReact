import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CreatePost from './CreatePost';
import Post from './Post';

class PostsLists extends Component {
    render() {

        const {posts}=this.props;
        
        return (
            
                 <div className="posts-list">
                   <CreatePost />
          {posts.map((post) => 
           <Post post={post} key={post._id} />
          )}
        </div> 
            
        );
    }
}

PostsLists.propTypes= {
  posts:PropTypes.array.isRequired,

};

export default PostsLists;