
function parseCommand(inputCommand) {
    if (!inputCommand) {
        console.log("use --help or -h for supported commands");
        return;
    }

    let command = inputCommand.toLowerCase();
    let commandArgs = command.split(" ");
    console.log(commandArgs);



    commandArgs.forEach(commandArg => {
        if(!commandArg.contains("=")){
            console.log("Invalid parameters, use -h for help");
            return;
        }
        let options = commandArg.split('=');
    });
    
    if (command === "-h" || command === "--help") {
        console.log("Use -ul or --usersList for getting the list of users");
        console.log("Use -ui or --userInfo for getting a specific user info");
    } 


}

export default { parseCommand }