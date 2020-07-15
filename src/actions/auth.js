import { LOGIN_START } from "./actionTypes";
import { func } from "prop-types";
import { APIUrls } from "../helpers/urls";
import {getFormBody} from "../helpers/utils"

// const { func } = require("prop-types");  

export function startLogin (){
    return {
        type:LOGIN_START,

    };
}

export function login(email,password){  
    return (dispatch)=>{
        const url=APIUrls.login();
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body: getFormBody({email,password}),    
        });

    }
}
