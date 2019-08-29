const readline = require('readline');

const PLAYER_ONE = 'X' ;
const PLAYER_TWO = 'O' ;

/**
 * Get instance of readline, to do different console operations
 * @returns {*}
 */
const getReadlineInterface = () => {
   return readline.createInterface({
        input: process.stdin,
        output: process.stdout
   });
};

/**
 * Clear console run time
 */
const clearConsole = () => {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
};

/**
 * Get Player 1 : X
 * @returns {string}
 */
const getPlayer1 = () => {
    return PLAYER_ONE;
};

/**
 * Get Player 2 : O
 * @returns {string}
 */
const getPlayer2 = () => {
    return PLAYER_TWO;
};

/**
 * Get Player No. to identify Player 1 or 2
 * @param player
 * @returns {number}
 */
const getPlayerInformation = (player) => {
    return (player === getPlayer1()) ? 1 : 2;        // P1 = X Human | P2 = O Human
};


module.exports = {
    getReadlineInterface,
    clearConsole,
    getPlayer1,
    getPlayer2,
    getPlayerInformation,
};
