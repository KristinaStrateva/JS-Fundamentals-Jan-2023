function diagonalAttack(matrix) {
    let matrixLength = matrix.length;
    let diagonal1Sum = 0;
    let diagonal2Sum = 0;

    for (let row = 0; row < matrixLength; row++) {
        matrix[row] = matrix[row].split(' ').map(Number);
    }

    for (let i = 0; i < matrixLength; i++) {
        let currRowAsArr = matrix[i];
        let currNumFromDiagonal1 = currRowAsArr[i];
        let currNumFromDiagonal2 = currRowAsArr[matrixLength - 1 - i];

        diagonal1Sum += currNumFromDiagonal1;
        diagonal2Sum += currNumFromDiagonal2;
    }

    if (diagonal1Sum === diagonal2Sum) {
        for (let i = 0; i < matrixLength; i++) {
            let currRowAsArr = matrix[i];
            let currRowAsArrLength = currRowAsArr.length;

            for (let j = 0; j < currRowAsArrLength; j++) {
                if (j !== i && j !== matrixLength - 1 - i) {
                    currRowAsArr[j] = diagonal1Sum;
                }
            }

            matrix[i] = currRowAsArr;
        }
    }

    for (let row = 0; row < matrixLength; row++) {
        let currRow = matrix[row].join(' ');

        console.log(currRow);
    }
}

diagonalAttack(['1 1 1', '1 1 1', '1 1 0'])