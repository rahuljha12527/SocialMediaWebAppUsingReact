import { FETCH_FRIEND_SUCCESS } from "./actionTypes";
import {getAuthTokenFromLocalStorage} from '../helpers/utils';
import { APIUrls } from "../helpers/urls";


export function fetchUserFriends(userId){
    return (dispatch)=>{
        const url=APIUrls.userFriends(userId);
        fetch(url,{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded', 
                Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log('data',data);
            dispatch(fetchFriendsSuccess(data.data.friends));
        });
    };
}

export function fetchFriendsSuccess(friends){
    return{
        type:FETCH_FRIEND_SUCCESS,
        friends,
    };
}