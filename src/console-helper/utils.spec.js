const {getReadlineInterface, getPlayer1, getPlayer2, getPlayerInformation} = require('../console-helper/utils');

test('define readline interface', async () => {

    const data = await getReadlineInterface();
    expect(data).toBeDefined();
});

test('get Player 1 Or X', () => {
    let data = getPlayer1();
    expect(data).toBe('X');
});

test('get Player 2 Or O', () => {
    let data = getPlayer2();
    expect(data).toBe('O');
});

test('get Player No. 1', () => {
    let data = getPlayerInformation('X');
    expect(data).toBe(1);
});

test('get Player No. 2', () => {
    let data = getPlayerInformation('O');
    expect(data).toBe(2);
});
