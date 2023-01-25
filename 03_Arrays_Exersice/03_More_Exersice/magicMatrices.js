function magicMatrice(matrix) {
    let firstRow = matrix[0];
    let firstRowLength = firstRow.length;
    let sum = 0;
    let matriceLength = matrix.length;
    let isMagic = true;

    for (let firstRowNums = 0; firstRowNums < firstRowLength; firstRowNums++) {
        let currFirstRowNum = firstRow[firstRowNums];

        sum += currFirstRowNum;
    }

    for (let currArr = 0; currArr < matriceLength; currArr++) {
        let currRow = matrix[currArr];
        let currRowLength = currRow.length;
        let rowSum = 0;
        let columnSum = 0;

        for (let rowNum = 0; rowNum < currRowLength; rowNum++) {
            let currRowNum = currRow[rowNum];

            rowSum += currRowNum;
        }

        for (let column = 0; column < matriceLength; column++) {
            let currColumn = matrix[column];
            let currColNum = currColumn[currArr];

            columnSum += currColNum;
        }

        if (rowSum !== sum || columnSum !== sum) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);
}

magicMatrice([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]);