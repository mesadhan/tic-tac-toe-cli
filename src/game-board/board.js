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

const number = 3;

const drawGameBoard = () => {
    clearConsole();

    let boardSymbol = '';
    for (let i = 0; i < number; i += 1) {
        for (let j = 0; j < number; j += 1) {
            const currentCursor = board[i][j];
            if (currentCursor === getPlayer1()) {
                if (j === 1) {
                    boardSymbol += '| X |';
                } else {
                    boardSymbol += ' X ';
                }
            } else if (currentCursor === getPlayer2()) {
                if (j === 1) {
                    boardSymbol += '| O |';
                } else {
                    boardSymbol += ' O ';
                }
            } else {
                if (j === 1) {
                    boardSymbol += '| - |';
                } else {
                    boardSymbol += ' - ';
                }
            }
        }
        if (i !== 2) {
            boardSymbol += '\n-----------\n';
        }
    }
    return boardSymbol;
};

const checkRows = (player, boardIn = board) => {
    for (let i = 0; i < number; i += 1) {
        let check = true;
        for (let j = 0; j < number; j += 1) {
            if (boardIn[i][j] !== player) {
                check = false;
            }
        }
        if (check) {
            return true;
        }
    }
    return false;
};

const checkColumns = (player, boardIn = board) => {
    for (let i = 0; i < number; i += 1) {
        let check = true;
        for (let j = 0; j < number; j += 1) {
            if (boardIn[j][i] !== player) {
                check = false;
            }
        }
        if (check) {
            return true;
        }
    }
    return false;
};

const checkDiagonally = (player, boardIn = board) => {

    if (boardIn[0][0] === player && boardIn[1][1] === player && boardIn[2][2] === player) {
        return true;
    }
    if (boardIn[0][2] === player && boardIn[1][1] === player && boardIn[2][0] === player) {
        return true;
    }
    return false;
};

const checkAllTheWiningCases = (player, boardIn = board) => {
    if (checkRows(player, boardIn)) return true;
    if (checkColumns(player, boardIn)) return true;
    if (checkDiagonally(player, boardIn)) return true;
    return false;
};

const placeSymbolInBoard = (row, column, playerSymbol) => {
    board[row][column] = playerSymbol;
};

module.exports = {
    drawGameBoard,
    checkRows,
    checkColumns,
    checkDiagonally,
    checkAllTheWiningCases,
    placeSymbolInBoard,
};
