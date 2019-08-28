const {
    clearConsole,
} = require('../console-helper/utils');

const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const drawGameBoard = () => {
    clearConsole();

    const n = 3;
    let boardStr = '';
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {
            const curr = board[i][j];
            if (curr === 'x') {
                if (j === 1) {
                    boardStr += '| X |';
                } else {
                    boardStr += ' X ';
                }
            } else if (curr === 'o') {
                if (j === 1) {
                    boardStr += '| O |';
                } else {
                    boardStr += ' O ';
                }
            } else {
                if (j === 1) {
                    boardStr += '| - |';
                } else {
                    boardStr += ' - ';
                }
            }
        }
        if (i !== 2) {
            boardStr += '\n-----------\n';
        }
    }
    return boardStr;
};


module.exports = {
    drawGameBoard,
};
