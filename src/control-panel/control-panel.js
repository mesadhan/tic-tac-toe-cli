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
const readlineInterface = getReadlineInterface();

let takeInputForRow = (player) => {
    let playerNumber = getPlayerInformation(player);
    readlineInterface.question(`[Player ${playerNumber} = ${player}] - Enter Row [1, 2, 3] :- `, (givenRow) => {
        if (givenRow === '1' || givenRow === '2' || givenRow === '3') {
            row = parseInt(givenRow) - 1;
            takeInputForColumn(player);
        } else {
            takeInputForRow(player);
        }
    });
};

const takeInputForColumn = (player) => {
    let playerNumber = getPlayerInformation(player);
    readlineInterface.question(`[Player ${playerNumber} = ${player}] - Enter Column [1, 2, 3] :- `, (givenColumn) => {
        if (givenColumn === '1' || givenColumn === '2' || givenColumn === '3') {
            column = parseInt(givenColumn) - 1;

            processRowColumnAndPlayerInformation(row, column, player)



        } else {
            takeInputForColumn(player);
        }
    });
};


const processRowColumnAndPlayerInformation = (row, column, player) => {

    placeSymbolInBoard(row, column, player);        // Put Player Symbol in Board
    console.log(drawGameBoard());                   // Draw game board in Console

    let playerNo = getPlayerInformation(player);

    if (checkAllTheWiningCases(player)) {
        console.log(`\nPlayer ${playerNo} - ${player} Wins The Game!`);
        readlineInterface.close();
        return;
    }
    if (player === getPlayer1()) {
        takeInputForRow(getPlayer2());
    } else {
        takeInputForRow(getPlayer1());
    }

};


const controlPanel = () => {
    clearConsole();
    takeInputForRow(getPlayer1());
};

module.exports = {
    controlPanel,
    takeInputForRow,
    takeInputForColumn,
};
