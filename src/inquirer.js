/**
 * This module helps us to prompts questions to the user based on the choices they chose.
 */

import inquirer from "inquirer";

function interactWithUser(){
    const questions = [
        {
            type: "list",
            name: "action",
            message: "Choose an action you want to perform",
            choices: ["users.list", "chat.postMessage"],
        }
    ];
    return inquirer.prompt(questions);
}

function getUserParam(){
    const question = [
        {
            type:"input",
            name: "userid",
            message:"enter the user id",
        }
    ];
    return inquirer.prompt(question);
}

function getChatMessage(){
    const questions =[
        {
            type:"input",
            name: "channelName",
            message: "enter the channel name"
        },
        {
            type: "input",
            name:"message",
            message:"plese type your message"
        }
    ];
    return inquirer.prompt(questions);
}

export default { interactWithUser, getUserParam, getChatMessage}