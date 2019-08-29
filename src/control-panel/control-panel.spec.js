const {takeRow, takeColumn} = require('../control-panel/control-panel');

test(' taking player1 or X, row & column from user ', () => {
    takeRow('X');
    takeColumn('X');
});

test(' taking player2 or O, row & column from user ', () => {
    takeRow('O');
    takeColumn('O');
});

