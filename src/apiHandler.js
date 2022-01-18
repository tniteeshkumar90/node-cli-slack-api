/**
 * This module handles the api calls coming from app.js
 * 
 * Here i have used a switch statement to call the necessary helper functions based on the choice selected by the user
 * 
 * It can be further refactored based on the requirements, like having api handler classes based on the endpoint route
 */

import { getUserList } from "../src/userActions.js";
import { postChatMessage } from '../src/chatActions.js'

const base_url = "https://slack.com/api/";

function apiCall(token, action, param){

    let url = base_url + action;

    switch(action){
        case 'users.list':
            getUserList(token, url);
            break;
        case 'chat.postMessage':
            postChatMessage(token, url, param);
            break;
    }
}

export default { apiCall } 