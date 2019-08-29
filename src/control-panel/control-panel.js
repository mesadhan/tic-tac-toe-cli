const {
    getReadlineInterface,
    clearConsole,
    getPlayer1,
    getPlayer2,
    getPlayerNo
} = require('../console-helper/utils');

let row = null;
let column = null;
const readlineInterface = getReadlineInterface();

let takeInputForRow = (player) => {
    let playerNumber = getPlayerNo(player);
    readlineInterface.question(`[Player ${playerNumber} = ${player}] - Enter Row [1, 2, 3] :- `, (givenRow) => {
        if (givenRow === '1' || givenRow === '2' || givenRow === '3') {
            row = parseInt(givenRow) - 1;
            takeInputForColumn(player);
        } else {
            takeInputForRow(player);
        }
    });
};

const takeInputForColumn = (player) => {
    let playerNumber = getPlayerNo(player);
    readlineInterface.question(`[Player ${playerNumber} = ${player}] - Enter Column [1, 2, 3] :- `, (givenColumn) => {
        if (givenColumn === '1' || givenColumn === '2' || givenColumn === '3') {
            column = parseInt(givenColumn) - 1;

            processRowColumnAndPlayerInformation(row, column, player)

        } else {
            takeInputForColumn(player);
        }
    });
};


const processRowColumnAndPlayerInformation = (row, column, player) => {

    //todo: need to process row, column and player information


};


const controlPanel = () => {
    clearConsole();
    takeInputForRow(getPlayer1());
};

module.exports = {
    controlPanel,
    takeInputForRow,
    takeInputForColumn,
};
