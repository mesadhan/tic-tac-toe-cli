const {
    drawGameBoard,
} = require('../game-board/board');

test('game control panel test start......', () => {

    expect(true).toBe(true);
});

test('draw game board properly .....', () => {

    let expectedData = ` - | - | - \n-----------\n - | - | - \n-----------\n - | - | - `;
    let data = drawGameBoard();

    expect(expectedData).toBe(data);
});
