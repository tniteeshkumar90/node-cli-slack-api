/**
 * This helper class is designed such a way that all the http methods can be added here and used inside each module as required.
 */

import axios from 'axios';
import qs from 'qs';

/**
 * Helper function to perform post operation
 * @param  {Object} args querystring parameters 
 * @param {string} url api url
 */
async function post(args, url){
    const result = await axios.post(url, qs.stringify(args));
    try{
        console.log(result.data);
    }catch(e){
        console.log(e);
    }
}

/**
 * Helper function to perform get operation
 * @param  {Object} args querystring parameters 
 * @param {string} url api url
 */
async function get(args, url){
    const result = await axios.get(url, qs.stringify(args));
    try{
        console.log(result.data);
    }catch(e){
        console.log(e);
    }
}

export  {get, post}