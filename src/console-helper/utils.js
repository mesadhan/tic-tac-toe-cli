const readline = require('readline');

const getReadlineInterface = () => {
   return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
};

const clearScreen = () => {

    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
};


module.exports = {
    getReadlineInterface,
    clearScreen,
};
