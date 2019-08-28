const readline = require('readline');

const PLAYER_ONE = 'X' ;
const PLAYER_TWO = 'O' ;

const getReadlineInterface = () => {
   return readline.createInterface({
        input: process.stdin,
        output: process.stdout
   });
};

const clearConsole = () => {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
};

const getPlayer1 = () => {
    return PLAYER_ONE;
};

const getPlayer2 = () => {
    return PLAYER_TWO;
};

const getPlayerNo = (player) => {
    return (player === getPlayer1()) ? 1 : 2;        // P1 = X | P2 = O
};


module.exports = {
    getReadlineInterface,
    clearConsole,
    getPlayer1,
    getPlayer2,
    getPlayerNo,
};
