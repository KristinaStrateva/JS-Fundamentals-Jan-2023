function printTownsInfo(input) {
    let townInfo = {};

    for (const town of input) {
        let currTownAsArr = town.split(' | ');

        townInfo.town = currTownAsArr[0];
        townInfo.latitude = Number(currTownAsArr[1]).toFixed(2);
        townInfo.longitude = Number(currTownAsArr[2]).toFixed(2);

        console.log(townInfo)
    }
}

printTownsInfo(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']);