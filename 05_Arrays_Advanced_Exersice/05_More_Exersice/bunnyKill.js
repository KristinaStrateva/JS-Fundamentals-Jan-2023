function killingBunnies(input) {
    let bombCoordinates = input.pop().split(' ').map(bomb => bomb.split(',').map(Number)); // -> making each coordinate pair as arr
    let bombCoordinatesLength = bombCoordinates.length;                                    // of intigers in main arr
    let matrixField = input.map(row => row.split(' ').map(Number)); // -> creating the input to arr of matrix of intigers 
    let killedBunniesAmount = 0;
    let totalSnowballsDamage = 0;

    // Alternate way to create the matrix of intigers:
    //
    // for (let element of input) {
    //     matrixField.push(element.split(' ').map(Number));
    // }

    for (let bomb = 0; bomb < bombCoordinatesLength; bomb++) {
        let currBombRow = bombCoordinates[bomb][0];
        let currBombCol = bombCoordinates[bomb][1];
        let currBombCellValue = matrixField[currBombRow][currBombCol];
        
        if (currBombCellValue <= 0) {
            continue;
        }

        let startRow = Math.max(currBombRow - 1, 0);
        let endRow = Math.min(currBombRow + 1, matrixField.length - 1);

        for (let rowToExplode = startRow; rowToExplode <= endRow; rowToExplode++) {
            let startCol = Math.max(currBombCol - 1, 0);
            let endCol = Math.min(currBombCol + 1, matrixField[rowToExplode].length - 1);

            for (let colToExplode = startCol; colToExplode <= endCol; colToExplode++) {
                let damagedCell = matrixField[rowToExplode][colToExplode];
               
                matrixField[rowToExplode][colToExplode] = Math.max(damagedCell - currBombCellValue, 0);
            }
        }

        totalSnowballsDamage += currBombCellValue;
        killedBunniesAmount++;
    }

    for (let row = 0; row < matrixField.length; row++) {
        for (let col = 0; col < matrixField[row].length; col++) {
            let currCell = matrixField[row][col];

            if (currCell === 0) {
                continue;
            }

            totalSnowballsDamage += currCell;
            killedBunniesAmount++;
        }
    }

    console.log(totalSnowballsDamage);
    console.log(killedBunniesAmount);
}

killingBunnies([
    '5 10 15 20',

    '10 10 10 10',

    '10 15 10 10',

    '10 10 10 10',

    '3,3 2,3 0,1',
]);