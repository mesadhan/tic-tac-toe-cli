const {
    clearConsole,
    getPlayer1,
    getPlayer2,
} = require('../console-helper/utils');

let board = null;
let number = null;

const gameBoardSetup = (n) => {

    board = new Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n);
    }
    number = n;
};

const drawGameBoard = () => {
    clearConsole();

    let boardSymbol = '';
    for (let i = 0; i < number; i += 1) {
        for (let j = 0; j < number; j += 1) {
            const currentCursor = board[i][j];
            if (currentCursor === getPlayer1()) {

                boardSymbol += ' X ';

            } else if (currentCursor === getPlayer2()) {

                boardSymbol += ' O ';
            } else {

                if (j === 0 || j === (number - 1)) {
                    boardSymbol += ' - ';
                } else {
                    boardSymbol += ' - ';
                }
            }
        }

        let tempShape = '\n';
        for (let j = 0; j < number; j++) {
            tempShape += '---';
        }
        boardSymbol += tempShape + '\n';

    }
    return boardSymbol;
};

const checkRows = (player, boardIn = board) => {

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

const checkColumns = (player, boardIn = board) => {
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

const checkDiagonally = (player, boardIn = board) => {

    let leftDiagonalCount = 0;
    let rightDiagonalCount = 0;

    for (let i = 0, k = number - 1; i < number; i++, k--) {

        if (boardIn[i][i] === player) {
            leftDiagonalCount++;
        }

        // right diagonal check
        if (boardIn[i][k] === player) {
            rightDiagonalCount++;
        }

        if (rightDiagonalCount === number) {
            return true;
        }
        if (leftDiagonalCount === number) {
            return true;
        }
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

const getBoard = () => {
    return board;
};

const computeComputerTurn = (board) => {

    let boardSize = board.length - 1;

    let rowIndex = Math.floor(Math.random() * boardSize);
    let columnIndex = Math.floor(Math.random() * boardSize);


    if (board[rowIndex][columnIndex] === 'X' || board[rowIndex][columnIndex] === 'O') {
        return computeComputerTurn(board);

    } else {
        return {
            rowIndex: rowIndex,
            columnIndex: columnIndex,
        }
    }
};
const computerStepCorrection = (board) => {

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] !== 'X') {

                if(board[i][j] !== 'O'){
                    return {
                        rowIndex: i,
                        columnIndex: j,
                    }
                }
            }
        }

    }

};


module.exports = {
    drawGameBoard,
    checkRows,
    checkColumns,
    checkDiagonally,
    checkAllTheWiningCases,
    placeSymbolInBoard,
    getBoard,
    gameBoardSetup,
    computeComputerTurn,
    computerStepCorrection,
};
