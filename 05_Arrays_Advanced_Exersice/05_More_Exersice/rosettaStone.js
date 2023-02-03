function decodingByRosettaStone(input) {
    let templateRowsAmount = Number(input.shift());
    let template = [];
    // template.push(input.shift().split(' ').map(Number), input.shift().split(' ').map(Number));

    for (let templateRow = 0; templateRow < templateRowsAmount; templateRow++) {
        template.push(input.shift().split(' ').map(Number));
    }
    
    let matrixFromInput = [];
    let inputLength = input.length;
    let templateColumnsAmount = template[0].length;

    for (let i = 0; i < inputLength; i++) {
        let currRow = input[i].split(' ').map(Number);
        matrixFromInput.push(currRow);
    }

    let resultMatrix = matrixFromInput.slice(0);
    let matrixLength = matrixFromInput.length;

    for (let matrixRow = 0; matrixRow < matrixLength; matrixRow++) {
        let currMatrixRowLength = matrixFromInput[matrixRow].length;
        
        for (let matrixCol = 0; matrixCol < currMatrixRowLength; matrixCol++) {
            let numFromMatrix = matrixFromInput[matrixRow][matrixCol];
            let numFromTemplate = template[matrixRow % templateRowsAmount][matrixCol % templateColumnsAmount];

            let sum = numFromMatrix + numFromTemplate;

            resultMatrix[matrixRow][matrixCol] = sum;
        }
    }

    for (let row = 0; row < matrixLength; row++) {
        let currMatrixRowLength = matrixFromInput[row].length;

        for (let col = 0; col < currMatrixRowLength; col++) {
            let currNum = matrixFromInput[row][col];
            let letterNum = currNum % 27; // This is how to eliminate the full rounds amount and what is left shows the letter number

            if (letterNum === 0) {
                resultMatrix[row][col] = ' ';
            } else {
                let asciiNumber = letterNum + 64; // This is how to convert the letterNum in ASCII number
                                                  // (A is 1 here, but in ASCII it is 65. The difference between them is 64,
                                                  // which is the difference between every letter here and its ASCII number)
        
                resultMatrix[row][col] = String.fromCharCode(asciiNumber);
            }
        }
    }

    let finalResult = '';

    for (let row = 0; row < matrixLength; row++) {
        finalResult += resultMatrix[row].join('');
    }

    console.log(finalResult);
}

decodingByRosettaStone([
    '1',

    '1 3 13',

    '12 22 14 13 25 0 4 24 23',

    '18 24 2 25 22 0 0 11 18',

    '8 25 6 26 8 23 13 4 14',

    '14 3 14 10 6 1 6 16 14',

    '11 12 2 10 24 2 13 24 0',
]);