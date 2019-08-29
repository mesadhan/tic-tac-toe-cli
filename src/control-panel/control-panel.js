const {
    getReadlineInterface,
    clearConsole,
    getPlayer1,
    getPlayer2,
    getPlayerNo
} = require('../console-helper/utils');

const {
    placeSymbolInBoard,
    drawGameBoard,
    checkAllTheWiningCases,
    setDefaultBoardSize,
} = require('../game-board/board');

let row = null;
let column = null;
const readlineInterface = getReadlineInterface();
let boardSize = null;

let takeInputForBoard = () => {

    readlineInterface.question(`[Enter Game Board Size]:- `, (givenBoardSize) => {
        boardSize = givenBoardSize;

        // todo : need validation
        setDefaultBoardSize(boardSize);

        takeInputForRow(getPlayer1());
    });
};
let takeInputForRow = (player) => {
    let playerNumber = getPlayerNo(player);
    readlineInterface.question(`[Player ${playerNumber} = ${player}] - Enter Row [1 ..${boardSize}] :- `, (givenRow) => {

        // todo : need validation
        row = parseInt(givenRow) - 1;
        takeInputForColumn(player);
    });
};

const takeInputForColumn = (player) => {
    let playerNumber = getPlayerNo(player);
    readlineInterface.question(`[Player ${playerNumber} = ${player}] - Enter Column [1 ...${boardSize}] :- `, (givenColumn) => {

        // todo : need validation
        column = parseInt(givenColumn) - 1;
        processRowColumnAndPlayerInformation(row, column, player)

    });
};


const processRowColumnAndPlayerInformation = (row, column, player) => {


    placeSymbolInBoard(row, column, player);        // Put Player Symbol in Board
    console.log(drawGameBoard());          // Draw game board in Console

    let playerNo = getPlayerNo(player);

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
    takeInputForBoard();
};

module.exports = {
    controlPanel,
    takeInputForRow,
    takeInputForColumn,
};
