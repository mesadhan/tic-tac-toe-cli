const {getReadlineInterface} = require('../console-helper/utils');

test('define readline interface', async () => {

    const data = await getReadlineInterface();
    expect(data).toBeDefined();
});

test('clear console.', () => {

});
