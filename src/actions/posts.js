import { UPDATE_POSTS, ADD_POST, ADD_COMMENT } from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { func } from 'prop-types';
import { getFormBody, getAuthTokenFromLocalStorage } from '../helpers/utils';

export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPosts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function createPost(content) {
  return (dispatch) => {
    const url = APIUrls.createPost();

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: getFormBody({ content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('daTa', data);

        if (data.success) {
          dispatch(addPost(data.data.post));
        }
      });
  };
}

export function createComment(content, postId) {
  //ye dekho
  return (dispatch) => {
    const url = APIUrls.createComment();
    console.log('datTa - is it going ok?', postId);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },

      body: getFormBody({ content, post_id: postId }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('datTa - is it ok?', data.data.content);

        if (data.success) {
          dispatch(addComment(data.data.comment, postId));
        }
      });
  };
}

export function addComment(comment, postId) {
  console.log('action comment xxxx', comment);
  return {
    type: ADD_COMMENT,
    comment,
    postId,
  };
}
