const {
    getReadlineInterface,
    clearConsole,
    getPlayer1,
    getPlayer2,
    getPlayerInformation
} = require('../console-helper/utils');

const {
    placePlayerSymbolInGameBoard,
    drawGameBoard,
    checkAllTheWinningCases,
    gameBoardSetup,
    computeComputerTurns,
    getGameBoard,
    computerStepCorrection,
} = require('../game-board/board');


let row = null;
let column = null;
const readlineInterface = getReadlineInterface();
let boardSize = null;

/**
 * Ask Player for Game Board Size
 */
let takeBoardSize = () => {
    readlineInterface.question(`[Enter Game Board Size]:- `, (givenBoardSize) => {
        boardSize = givenBoardSize;

        gameBoardSetup(boardSize);
        takeRow(getPlayer1());
    });
};

/**
 * Ask Player for Row Position
 * @param player
 */
let takeRow = (player) => {
    let playerNumber = getPlayerInformation(player);
    readlineInterface.question(`[Player ${playerNumber} = ${player}] - Enter Row [1 ... ${boardSize}] :- `, (givenRow) => {

       if(givenRow >= 1 && givenRow <= boardSize){
           row = parseInt(givenRow) - 1;
           takeColumn(player);
       }else {
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
    readlineInterface.question(`[Player ${playerNumber} = ${player}] - Enter Column [1 ... ${boardSize}] :- `, (givenColumn) => {

        if(givenColumn >= 1 && givenColumn <= boardSize){
            column = parseInt(givenColumn) - 1;
            processRowColumnAndPlayerInformation(row, column, player)
        }else {
            takeColumn(player);
        }

    });
};

/**
 * After taken input, process row, column and player information
 * @param player
 */
const processRowColumnAndPlayerInformation = (row, column, player) => {

    placePlayerSymbolInGameBoard(row, column, player);          // Put Player Symbol in Board
    console.log(drawGameBoard());                               // Draw game board in Console
    let playerNo = getPlayerInformation(player);

    if (checkAllTheWinningCases(player)) {
        console.log(`\nPlayer ${playerNo} - ${player} | Wins The Game!`);
        readlineInterface.close();
        return;
    }

    if (player === getPlayer1()) {

        playComputer();                     // Computer make steps, After done Player 1 steps.

    } else {
        takeRow(getPlayer1());
    }
};

/**
 * Computer Turn, Process then make steps
 */
const playComputer = () => {
    let gameBoard = getGameBoard();
    let computerStep = null;
    try {
        computerStep = computeComputerTurns(gameBoard);
        processRowColumnAndPlayerInformation(computerStep.rowIndex, computerStep.columnIndex, getPlayer2())
    }catch (e) {
        computerStep = computerStepCorrection(gameBoard);
        processRowColumnAndPlayerInformation(computerStep.rowIndex, computerStep.columnIndex, getPlayer2())
    }
};

const controlPanel = () => {
    clearConsole();
    takeBoardSize();
};


module.exports = {
    controlPanel,
    takeRow,
    takeColumn,
};
