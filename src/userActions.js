/**
 * Module to perform all User Actions related endpoints
 */

import {get} from '../src/axiosHelper.js'

async function getUserList(token, url){
    let args = {
        token: token
    };
    get(args, url);
}

export { getUserList }