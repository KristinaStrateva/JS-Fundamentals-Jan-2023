function findingNeighborPairs(matrix) {
    let matrixLength = matrix.length;
    let pairCounter = 0;

    for (let i = 0; i < matrixLength; i++) {
        let currArr = matrix[i];
        let nextArr = matrix[i + 1];
        let currArrLength = currArr.length;

        for (let j = 0; j < currArrLength - 1; j++) {
            let currRowElement = currArr[j];
            let nextRowElement = currArr[j + 1];

            if (currRowElement === nextRowElement) {
                pairCounter++;
            }
        }

        for (let k = 0; k < currArrLength; k++) {
            if (i === matrixLength - 1) {
                break;
            }

            let currColumnElement = currArr[k];
            let nextColumnElement = nextArr[k];

            if (currColumnElement === nextColumnElement) {
                pairCounter++;
            }
        }
    }

    console.log(pairCounter);
}

findingNeighborPairs(
    [['test', 'yo', 'yo', 'ho'], ['well', 'done', 'no', '6'], ['not', 'done', 'yet', '5']]
);