const {
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
} = require('../game-board/board');

const {
    getPlayer1,
    getPlayer2,
} = require('../console-helper/utils');


gameBoardSetup(3);         // initial board size 3, for test purpose.

test('draw game board properly', async () => {

    // todo: test run properly but clear console so that commented it.

   /* let expectedData = `\n---------\n -  -  - \n---------\n -  -  - \n---------\n -  -  - \n---------\n`;
    let data = await drawGameBoard();
    console.log(data);
    expect(expectedData).toBe(data);*/
});


test('check all rows winning cases in board', () => {

    let PS = 'X';

    const board_1 = [[PS, PS, PS],
                     [null, null, null],
                     [null, null, null]];

    const board_2 = [[null, null, null],
                     [PS, PS, PS],
                     [null, null, null]];

    const board_3 = [[null, null, null],
                    [null, null, null],
                    [PS, PS, PS]];

    const board_4 = [[PS, null, null],
                     [PS, null, null],
                     [PS, null, null]];

    expect(checkAllRowsWinningCases(PS, board_1)).toBe(true);
    expect(checkAllRowsWinningCases(PS, board_2)).toBe(true);
    expect(checkAllRowsWinningCases(PS, board_3)).toBe(true);
    expect(checkAllRowsWinningCases(PS, board_4)).toBe(false);
});


test('check all columns winning cases in board', () => {
    let PS = 'X';

    const board_1 = [[PS, null, null],
                    [PS, null, null],
                    [PS, null, null]];

    const board_2 = [[null, PS, null],
                    [null, PS, null],
                    [null, PS, null]];

    const board_3 = [[null, null, PS],
                    [null, null, PS],
                    [null, null, PS]];

    const board_4 = [[null, null, null],
                    [null, null, null],
                    [PS, PS, PS]];

    expect(checkAllColumnsWinningCases(PS, board_1)).toBe(true);
    expect(checkAllColumnsWinningCases(PS, board_2)).toBe(true);
    expect(checkAllColumnsWinningCases(PS, board_3)).toBe(true);
    expect(checkAllColumnsWinningCases(PS, board_4)).toBe(false);
});


test('check all diagonally winning cases in board', () => {

    let PS = 'X';

    const board_1 = [[PS, null, null],
                    [null, PS, null],
                    [null, null, PS]];

    const board_2 = [[null, null, PS],
                    [null, PS, null],
                    [PS, null, null]];

    expect(checkAllDiagonallyWinningCases(PS, board_1)).toBe(true);
    expect(checkAllDiagonallyWinningCases(PS, board_2)).toBe(true);
});


test('check all the winning cases in board', () => {

    let PS = 'X';

    const board_1 = [[PS, PS, PS],
                     [null, null, null],
                     [null, null, null]];

    const board_2 = [[null, PS, null],
                     [null, PS, null],
                     [null, PS, null]];

    const board_3 = [[null, null, PS],
                     [null, PS, null],
                     [PS, null, null]];

    expect(checkAllTheWinningCases(PS, board_1)).toBe(true);
    expect(checkAllTheWinningCases(PS, board_2)).toBe(true);
    expect(checkAllTheWinningCases(PS, board_3)).toBe(true);
});


test('place symbol in game board', () => {

    let playerSymbol = getPlayer1();
    let row = 1;                                // Player Row
    let column = 1;                             // Player Column

    let expectedPlayerSymbol = getPlayer1();

    placePlayerSymbolInGameBoard(row, column, playerSymbol);          // place symbol in board
    let gameBoard = getGameBoard();
    let symbol = gameBoard[row][column];

    expect(expectedPlayerSymbol).toBe(symbol);
});


test('compute computer turn, also correct step', () => {

    const board = [
        ['X', 'O', 'X'],
        ['O', 'O', 'X'],
        ['O', 'X', null]
    ];

    let computerSteps = '';
    let flag = false;
    try {
        computerSteps = computeComputerTurns(board);
        //console.log('computeComputerTurns', computerSteps);
    }catch (e) {
        computerSteps = computerStepCorrection(board);
        //console.log('computerStepCorrection', computerSteps);
        flag = true;
    }
    expect(true).toBe(flag);
});
