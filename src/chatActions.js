/**
 * Module to include all endpoints related to chat
 */

import {post} from './axiosHelper.js';

/**
 * 
 * @param {string} token SlackApi token to perform the api calls
 * @param {string} url endpoint url
 * @param {Object} param querystring parameters
 */
function postChatMessage(token, url, param){
    let args = {
        token: token,
        channel: param.chatParam.channel,
        text: param.chatParam.message
    };
    post(args, url);
}

export {postChatMessage}