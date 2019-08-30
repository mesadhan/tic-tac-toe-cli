const {
    takeRow,
    takeColumn
} = require('../control-panel/control-panel');

const {
    getPlayer1,
    getPlayer2,
} = require('../console-helper/utils');


test(' taking board size from user ', () => {
    let player = getPlayer1();
    takeRow(player);
    takeColumn(player);
});

test(' taking player1 X row & column from user ', () => {
    let player = getPlayer1();
    takeRow(player);
    takeColumn(player);
});

