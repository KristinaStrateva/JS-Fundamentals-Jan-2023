function equalArrays(arr1, arr2) {
    let isEqual = false;
    let counter = 0;
    let firstDiffIndex = 0;

    for (let i = 0; i < arr1.length; i++) {
        let currString = arr2[i];
        counter++;

        if (currString === arr1[i]) {
            isEqual = true;
        } else {
            isEqual = false;
            firstDiffIndex = counter - 1;
            break;
        }
    }

    if (isEqual) {
        let sum = 0;

        for (let numberAsString of arr1) {
            let number = Number(numberAsString);
            sum += number;
        }

        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${firstDiffIndex} index`);
    }
}

equalArrays(
    ['1'], ['10']
    );