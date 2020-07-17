// const { func } = require("prop-types");

import { func } from "prop-types";

export  function getFormBody(params){
    let formBody=[];

    for(let property in params){
        let encodedKey=encodeURIComponent(property);

        let encodedValue=encodeURIComponent(params[property]);
        formBody.push(encodedKey + '=' +encodedValue);
    }

    return formBody.join('&');  // 'username=aakash&password=12323'
}   

export function getAuthTokenFromLocalStorage (){
    return localStorage.getItem('token');
}