const {
    drawGameBoard,
    checkRows,
    checkColumns,
    checkDiagonally,
    checkAllTheWiningCases,
    placeSymbolInBoard,
    getBoard,
} = require('../game-board/board');


test('draw game board properly', async () => {

    let expectedData = ` - | - | - \n-----------\n - | - | - \n-----------\n - | - | - `;
    let data = await drawGameBoard();

    console.log(data);
    expect(expectedData).toBe(data);
});


test('check row wins in board', () => {
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

    expect(checkRows(PS, board_1)).toBe(true);
    expect(checkRows(PS, board_2)).toBe(true);
    expect(checkRows(PS, board_3)).toBe(true);
    expect(checkRows(PS, board_4)).toBe(false);
});


test('check column wins in board', () => {
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

    expect(checkColumns(PS, board_1)).toBe(true);
    expect(checkColumns(PS, board_2)).toBe(true);
    expect(checkColumns(PS, board_3)).toBe(true);
    expect(checkColumns(PS, board_4)).toBe(false);
});




test('check diagonally wins in board', () => {

    let PS = 'X';
    const board_1 = [[PS, null, null],
                    [null, PS, null],
                    [null, null, PS]];

    const board_2 = [[null, null, PS],
                    [null, PS, null],
                    [PS, null, null]];

    expect(checkDiagonally(PS, board_1)).toBe(true);
    expect(checkDiagonally(PS, board_2)).toBe(true);
});


test('check all the wining cases', () => {

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

    expect(checkAllTheWiningCases(PS, board_1)).toBe(true);
    expect(checkAllTheWiningCases(PS, board_2)).toBe(true);
    expect(checkAllTheWiningCases(PS, board_3)).toBe(true);
});

test('place symbol in board', () => {

    let playerSymbol = 'X';
    let row = 1;
    let column = 1;

    let expectedPlayerSymbol = 'X';

    placeSymbolInBoard(row, column, playerSymbol);          // put value in board
    let board = getBoard();
    let boardValue = board[row][column];

    expect(expectedPlayerSymbol).toBe(boardValue);
});
