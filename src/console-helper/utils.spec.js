const {getReadlineInterface,
    getPlayer1,
    getPlayer2,
    getPlayerInformation,
} = require('../console-helper/utils');


test('define readline interface', async () => {

    const data = await getReadlineInterface();
    expect(data).toBeDefined();
});

test('get player 1 Or X', () => {
    let data = getPlayer1();
    expect(data).toBe('X');
});

test('get player 2 Or O', () => {
    let data = getPlayer2();
    expect(data).toBe('O');
});

test('get player No. 1', () => {
    let data = getPlayerInformation(getPlayer1());
    expect(data).toBe(1);
});

test('get player No. 2', () => {
    let data = getPlayerInformation(getPlayer2());
    expect(data).toBe(2);
});
