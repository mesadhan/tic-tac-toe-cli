const {
    getReadlineInterface,
    clearConsole,
    getPlayer1,
    getPlayer2,
    getPlayerInformation
} = require('../console-helper/utils');

const {
    placeSymbolInBoard,
    drawGameBoard,
    checkAllTheWiningCases,
} = require('../game-board/board');

let row = null;
let column = null;
let boardSize = 3;
const readlineInterface = getReadlineInterface();

/**
 * Ask Player for Row Position
 * @param player
 */
let takeRow = (player) => {
    let playerNumber = getPlayerInformation(player);
    readlineInterface.question(`[Player ${playerNumber} = ${player}] - Enter Row [1, 2, 3] :- `, (givenRow) => {
        if(givenRow >= 1 && givenRow <= boardSize){
            row = parseInt(givenRow) - 1;
            takeColumn(player);
        } else {
            takeRow(player);
        }
    });
};

/**
 * Ask Player for Column Position
 * @param player
 */
const takeColumn = (player) => {
    let playerNumber = getPlayerInformation(player);
    readlineInterface.question(`[Player ${playerNumber} = ${player}] - Enter Column [1, 2, 3] :- `, (givenColumn) => {

        if(givenColumn >= 1 && givenColumn <= boardSize){
            column = parseInt(givenColumn) - 1;

            processRowColumnAndPlayerInformation(player)

        } else {
            takeColumn(player);
        }
    });
};

/**
 * After taken input, process row, column and player information
 * @param player
 */
const processRowColumnAndPlayerInformation = (player) => {

    placeSymbolInBoard(row, column, player);        // Put Player Symbol in Board
    console.log(drawGameBoard());                   // Draw game board in Console

    let playerNo = getPlayerInformation(player);

    if (checkAllTheWiningCases(player)) {
        console.log(`\nPlayer ${playerNo} - ${player} | Wins The Game!`);
        readlineInterface.close();
        return;
    }
    if (player === getPlayer1()) {
        takeRow(getPlayer2());              // After done Player 1 steps, Take Player 2 input
    } else {
        takeRow(getPlayer1());              // Take Player 1 input
    }
};


const controlPanel = () => {
    clearConsole();
    takeRow(getPlayer1());
};

module.exports = {
    controlPanel,
    takeRow,
    takeColumn,
};
