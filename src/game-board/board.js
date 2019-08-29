const {
    clearConsole,
    getPlayer1,
    getPlayer2,
} = require('../console-helper/utils');

const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const number = 3;        // Its fixed (3 x 3) board

/**
 * Draw Game Board, So base on user interaction console can be update
 * @returns {string|string}
 */
const drawGameBoard = () => {
    clearConsole();

    let boardSymbol = '';
    for (let rowIndex = 0; rowIndex < number; rowIndex += 1) {
        for (let columnIndex = 0; columnIndex < number; columnIndex += 1) {
            const currentCursor = board[rowIndex][columnIndex];
            if (currentCursor === getPlayer1()) {
                if (columnIndex === 1) {
                    boardSymbol += '| X |';
                } else {
                    boardSymbol += ' X ';
                }
            } else if (currentCursor === getPlayer2()) {
                if (columnIndex === 1) {
                    boardSymbol += '| O |';
                } else {
                    boardSymbol += ' O ';
                }
            } else {
                if (columnIndex === 1) {
                    boardSymbol += '| - |';
                } else {
                    boardSymbol += ' - ';
                }
            }
        }
        if (rowIndex !== 2) {
            boardSymbol += '\n-----------\n';
        }
    }
    return boardSymbol;
};

/**
 * Check all the rows to find out if winning cases exist
 * @param player
 * @param boardIn
 * @returns {boolean}
 */
const checkAllRowsWinningCases = (player, boardIn = board) => {
    for (let rowIndex = 0; rowIndex < number; rowIndex += 1) {
        let check = true;
        for (let columnIndex = 0; columnIndex < number; columnIndex += 1) {
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
const checkAllColumnsWinningCases = (player, boardIn = board) => {
    for (let rowIndex = 0; rowIndex < number; rowIndex += 1) {
        let check = true;
        for (let columnIndex = 0; columnIndex < number; columnIndex += 1) {
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
const checkAllDiagonallyWinningCases = (player, boardIn = board) => {

    if (boardIn[0][0] === player && boardIn[1][1] === player && boardIn[2][2] === player) {
        return true;
    }
    if (boardIn[0][2] === player && boardIn[1][1] === player && boardIn[2][0] === player) {
        return true;
    }
    return false;
};

/**
 * Check all cases to find out if winning cases exist
 * @param player
 * @param boardIn
 * @returns {boolean}
 */
const checkAllTheWinningCases = (player, boardIn = board) => {
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
    board[row][column] = playerSymbol;
};

const getBoard = () => {
  return board;
};

module.exports = {
    drawGameBoard,
    checkAllRowsWinningCases,
    checkAllColumnsWinningCases,
    checkAllDiagonallyWinningCases,
    checkAllTheWinningCases,
    placePlayerSymbolInGameBoard,
    getBoard,
};
