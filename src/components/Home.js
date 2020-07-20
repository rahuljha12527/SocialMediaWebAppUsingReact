import React, { Component } from 'react';
import { PostsList } from './';
import FriendsList from './FriendsList';

class Home extends Component {

    render() { 
        const {posts,friends,isLoggedin}=this.props;
        console.log('friends in Home',friends)
        return ( 
            <div className="home">
                <PostsList posts={posts}/>
                {isLoggedin && <FriendsList friends={friends} />}
            </div>
        );
    }
}

export default Home;