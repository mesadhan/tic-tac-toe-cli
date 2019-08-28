const {
    drawGameBoard,
} = require('../game-board/board');


test('draw game board properly', () => {

    let expectedData = ` - | - | - \n-----------\n - | - | - \n-----------\n - | - | - `;
    let data = drawGameBoard();

    expect(expectedData).toBe(data);
});
