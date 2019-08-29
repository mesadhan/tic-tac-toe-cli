const {
    drawGameBoard,
    checkAllRowsWinningCases,
    checkAllColumnsWinningCases,
    checkAllDiagonallyWinningCases,
    checkAllTheWinningCases,
    placePlayerSymbolInGameBoard,
    getBoard,
} = require('../game-board/board');


test('draw game board properly', async () => {

    let expectedData = ` - | - | - \n-----------\n - | - | - \n-----------\n - | - | - `;
    let data = await drawGameBoard();

    console.log(data);
    expect(expectedData).toBe(data);
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

    let playerSymbol = 'X';
    let row = 1;
    let column = 1;

    let expectedPlayerSymbol = 'X';

    placePlayerSymbolInGameBoard(row, column, playerSymbol);          // put value in board
    let board = getBoard();
    let boardValue = board[row][column];

    expect(expectedPlayerSymbol).toBe(boardValue);
});
