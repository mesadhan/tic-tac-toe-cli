const {takeInputForRow, takeInputForColumn} = require('../control-panel/control-panel');

test(' taking Player1 X row & column input form user ', () => {
    takeInputForRow('X');
    takeInputForColumn('X');
});

test(' taking Player2 O row & column input form user ', () => {
    takeInputForRow('O');
    takeInputForColumn('O');
});

