function orbit(input) {
    let matrixWidth = input[0];
    let matrixHeight = input[1];
    let starX = input[2];
    let starY = input[3];

    let matrix = [];
    let matrixLength = matrixHeight;

    for (let matrixRow = 0; matrixRow < matrixLength; matrixRow++) {
        matrix.push([]);
    }

    for (let matrixRow = 0; matrixRow < matrixLength; matrixRow++) {
        for (let matrixColumn = 0; matrixColumn < matrixWidth; matrixColumn++) {
            matrix[matrixRow][matrixColumn] = Math.max(Math.abs(matrixRow - starX) + 1, Math.abs(matrixColumn - starY) + 1);
        }
    }

    for (let row = 0; row < matrixLength; row++) {
        let currRow = matrix[row];

        console.log(currRow.join(' '));
    }
}

orbit([
    3, 3,
    2, 2,
]);