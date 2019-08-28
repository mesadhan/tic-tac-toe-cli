const {takeInputForRow, takeInputForColumn} = require('../control-panel/control-panel');

test(' taking Player1 X row & column input form user ', async () => {
    takeInputForRow('X');
    takeInputForColumn('X');
});

test(' taking Player2 Y row & column input form user ', async () => {
    takeInputForRow('Y');
    takeInputForColumn('Y');
});

