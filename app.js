#!/usr/bin/env node
import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from '../node-cli-slack-api/src/inquirer.js';
import apiHandler from '../node-cli-slack-api/src/apiHandler.js';


const init = async () => {
    console.log(
        chalk.yellow(
            figlet.textSync("Slack CLI", {horizontalLayout: "default"})
        )
    );
};

const run = async () => {
    init();

    //let actions_requiring_user_param = ['users.info', 'users.profile.get'];

    const actionFromUser = await inquirer.interactWithUser();
    const {action} = actionFromUser;
    let param = {};


    switch(action){
        case 'chat.postMessage':
            let {channelName, message} = await inquirer.getChatMessage();
            param.chatParam = {channel: channelName, message: message};
            break;
    }

    const token = process.env.slack_token;

    if(token == null) {
        console.log(chalk.red("Please set slack_token in your environment to use this cli"));
        return;
    }
    
    apiHandler.apiCall(token, action, param);
};

run();


