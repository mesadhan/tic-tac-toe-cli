const {
    drawGameBoard,
    checkRows,
} = require('../game-board/board');


test('draw game board properly', async () => {

    let expectedData = ` - | - | - \n-----------\n - | - | - \n-----------\n - | - | - `;
    let data = await drawGameBoard();

    console.log(data);
    expect(expectedData).toBe(data);
});


test('check row wins in board', () => {
    let playerSymbol = 'X';

    const board_1 = [
        [playerSymbol, playerSymbol, playerSymbol],
        [null, null, null],
        [null, null, null]];

    const board_2 = [
        [null, null, null],
        [playerSymbol, playerSymbol, playerSymbol],
        [null, null, null]];

    const board_3 = [
        [null, null, null],
        [null, null, null],
        [playerSymbol, playerSymbol, playerSymbol]];

    const board_4 = [
        [playerSymbol, null, null],
        [playerSymbol, null, null],
        [playerSymbol, null, null]];

    expect(checkRows(playerSymbol, board_1)).toBe(true);
    expect(checkRows(playerSymbol, board_2)).toBe(true);
    expect(checkRows(playerSymbol, board_3)).toBe(true);
    expect(checkRows(playerSymbol, board_4)).toBe(false);
});


test('check row wins in board', () => {
    let playerSymbol = 'X';

    const board_1 = [
        [playerSymbol, playerSymbol, playerSymbol],
        [null, null, null],
        [null, null, null]];

    const board_2 = [
        [null, null, null],
        [playerSymbol, playerSymbol, playerSymbol],
        [null, null, null]];

    const board_3 = [
        [null, null, null],
        [null, null, null],
        [playerSymbol, playerSymbol, playerSymbol]];

    const board_4 = [
        [playerSymbol, null, null],
        [playerSymbol, null, null],
        [playerSymbol, null, null]];

    expect(checkRows(playerSymbol, board_1)).toBe(true);
    expect(checkRows(playerSymbol, board_2)).toBe(true);
    expect(checkRows(playerSymbol, board_3)).toBe(true);
    expect(checkRows(playerSymbol, board_4)).toBe(false);
});
