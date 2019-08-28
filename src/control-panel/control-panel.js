const {getReadlineInterface, clearConsole} = require('../console-helper/utils');

const readlineInterface = getReadlineInterface();

let takeInputForRow = (player) => {
    readlineInterface.question(`Player 1 Turn - ${player} Enter Row (1, 2, 3):- `, (givenRow) => {

        if (givenRow === '1' || givenRow === '2' || givenRow === '3') {
            row = parseInt(givenRow) - 1;

            console.log('message', givenRow);
            console.log('message', row);

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

            console.log('message', givenColumn);
            console.log('message', column);

            takeInputForRow(player);

        } else {
            takeInputForColumn(player);
        }
    });
};


const controlPanel = () => {

    let row = null;
    let column = null;

    clearConsole();
    takeInputForRow('X');
};

module.exports = {
    controlPanel,
    takeInputForRow,
    takeInputForColumn,
};
