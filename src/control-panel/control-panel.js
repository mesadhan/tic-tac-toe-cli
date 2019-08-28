const {getReadlineInterface, clearConsole} = require('../console-helper/utils');

let row = null;
let column = null;

const readlineInterface = getReadlineInterface();

let takeInputForRow = (player) => {
    readlineInterface.question(`Player 1 Turn - ${player} Enter Row (1, 2, 3):- `, (givenRow) => {

        if (givenRow === '1' || givenRow === '2' || givenRow === '3') {
            row = parseInt(givenRow) - 1;
            takeInputForColumn(player);
        } else {
            takeInputForRow(player);
        }
    });
};

const takeInputForColumn = (player) => {
    readlineInterface.question(`Player 2 Turn - ${player} Enter Column (1, 2, 3):- `, (givenColumn) => {

        if (givenColumn === '0' || givenColumn === '1' || givenColumn === '2') {
            column = parseInt(givenColumn) - 1;

            //todo: need to process row, column and player information

        } else {
            takeInputForColumn(player);
        }
    });
};


const controlPanel = () => {

    clearConsole();
    takeInputForRow('X');
};

module.exports = {
    controlPanel,
    takeInputForRow,
    takeInputForColumn,
};
