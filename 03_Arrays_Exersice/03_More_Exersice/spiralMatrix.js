function spiralMatrix(matrixRowAmount, matrixColAmount) {
    let result = ``;
    let num = 0;
    // let maxNum = matrixRowAmount * matrixColAmount;

    for (let i = 1; i <= matrixRowAmount; i++) {
        let spiralMatrixRow = [];

        for (let j = 1; j <= matrixColAmount; j++) {
            num++;
            spiralMatrixRow.push(num);
        }

        let currRowAsString = spiralMatrixRow.join(' ');
        result += `${currRowAsString}
`;
    }

    console.log(result);
}

spiralMatrix(5, 5);