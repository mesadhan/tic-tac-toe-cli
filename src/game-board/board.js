const {
    clearConsole,
    getPlayer1,
    getPlayer2,
} = require('../console-helper/utils');

let gameBoard = null;


/**
 * Initial setup game board, It contains game board information
 * @param boardSize
 */
const gameBoardSetup = (boardSize) => {
    gameBoard = new Array(boardSize);
    for (let i = 0; i < boardSize; i++) {
        gameBoard[i] = new Array(boardSize);
    }
};

const getGameBoard = () => {
    return gameBoard;
};

/**
 * Draw Game Board, So base on user interaction console can be update
 * @returns {string|string}
 */
const drawGameBoard = () => {
    clearConsole();

    let boardSymbol = '';
    boardSymbol += drawDividerLine();
    for (let i = 0; i < gameBoard.length; i += 1) {
        for (let j = 0; j < gameBoard.length; j += 1) {
            const currentCursor = gameBoard[i][j];
            if (currentCursor === getPlayer1()) {

                boardSymbol += ' X ';

            } else if (currentCursor === getPlayer2()) {

                boardSymbol += ' O ';
            } else {

                if (j === 0 || j === (gameBoard.length - 1)) {
                    boardSymbol += ' - ';
                } else {
                    boardSymbol += ' - ';
                }
            }
        }

        boardSymbol += drawDividerLine();

    }
    return boardSymbol;
};

const drawDividerLine = () => {
    let dividerLine = '\n';
    for (let index = 0; index < gameBoard.length; index++) {
        dividerLine += '---';
    }
    dividerLine += '\n';
    return dividerLine;
};

/**
 * Check all the rows to find out if winning cases exist
 * @param player
 * @param boardIn
 * @returns {boolean}
 */
const checkAllRowsWinningCases = (player, boardIn = gameBoard) => {

    for (let rowIndex = 0; rowIndex < boardIn.length; rowIndex += 1) {
        let check = true;
        for (let columnIndex = 0; columnIndex < boardIn.length; columnIndex += 1) {
            if (boardIn[rowIndex][columnIndex] !== player) {
                check = false;
            }
        }
        if (check) {
            return true;
        }
    }
    return false;
};

/**
 * Check all the columns to find out if winning cases exist
 * @param player
 * @param boardIn
 * @returns {boolean}
 */
const checkAllColumnsWinningCases = (player, boardIn = gameBoard) => {
    for (let rowIndex = 0; rowIndex < boardIn.length; rowIndex += 1) {
        let check = true;
        for (let columnIndex = 0; columnIndex < boardIn.length; columnIndex += 1) {
            if (boardIn[columnIndex][rowIndex] !== player) {
                check = false;
            }
        }
        if (check) {
            return true;
        }
    }
    return false;
};

/**
 * Check all them diagonally to find out if winning cases exist
 * @param player
 * @param boardIn
 * @returns {boolean}
 */
const checkAllDiagonallyWinningCases = (player, boardIn = gameBoard) => {

    let leftDiagonalCount = 0;
    let rightDiagonalCount = 0;

    for (let i = 0, k = boardIn.length - 1; i < boardIn.length; i++, k--) {
        // left -> bottom diagonal check
        if (boardIn[i][i] === player) {
            leftDiagonalCount++;
        }
        // right -> bottom diagonal check
        if (boardIn[i][k] === player) {
            rightDiagonalCount++;
        }
        // finally, any diagonal match then return true
        if (rightDiagonalCount === boardIn.length) return true;
        if (leftDiagonalCount === boardIn.length) return true;
    }
    return false;
};

/**
 * Check all cases to find out if winning cases exist
 * @param player
 * @param boardIn
 * @returns {boolean}
 */
const checkAllTheWinningCases = (player, boardIn = gameBoard) => {
    if (checkAllRowsWinningCases(player, boardIn)) return true;
    if (checkAllColumnsWinningCases(player, boardIn)) return true;
    if (checkAllDiagonallyWinningCases(player, boardIn)) return true;
    return false;
};

/**
 * Place Player Symbol (X or O) in game board
 * @param row
 * @param column
 * @param playerSymbol
 */
const placePlayerSymbolInGameBoard = (row, column, playerSymbol) => {
    gameBoard[row][column] = playerSymbol;
};


/**
 * Here, Computer generate It's next steps
 * @param board
 * @returns {{rowIndex, columnIndex}|{rowIndex: number, columnIndex: number}}
 */
const computeComputerTurns = (board) => {

    let boardSize = board.length - 1;

    let rowIndex = Math.floor(Math.random() * boardSize);
    let columnIndex = Math.floor(Math.random() * boardSize);

    if (board[rowIndex][columnIndex] === 'X' || board[rowIndex][columnIndex] === 'O') {
        return computeComputerTurns(board);

    } else {
        return {
            rowIndex: rowIndex,
            columnIndex: columnIndex,
        }
    }
};

/**
 * Computer Step Correction when 'computeComputerTurns()' didn't generate step.
 * Then this Method can find the next steps
 * @param board
 * @returns {{rowIndex: number, columnIndex: number}}
 */
const computerStepCorrection = (board) => {
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {

        for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {

            if (board[rowIndex][columnIndex] !== getPlayer1()) {                  // Player1: X
                if (board[rowIndex][columnIndex] !== getPlayer2()) {                 // Player2: O
                    return {
                        rowIndex: rowIndex,
                        columnIndex: columnIndex,
                    }
                }
            }
        }
    }
};


module.exports = {
    drawGameBoard,
    checkAllRowsWinningCases,
    checkAllColumnsWinningCases,
    checkAllDiagonallyWinningCases,
    checkAllTheWinningCases,
    placePlayerSymbolInGameBoard,
    getGameBoard,
    gameBoardSetup,
    computeComputerTurns,
    computerStepCorrection,
};
