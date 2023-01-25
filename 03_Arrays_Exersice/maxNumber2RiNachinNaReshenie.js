function maxNumber(input) {
    let inputLength = input.length;
    let newArr = [];

    for (let i = 0; i < inputLength; i++) {
        let currNum = input[i];
        let isBigger = true;

        for (let j = i + 1; j < inputLength; j++) {
            let numberToCheck = input[j];

            if (currNum <= numberToCheck) {
                isBigger = false;
            }
        }

        if (isBigger) {
            newArr.push(currNum);
        }
    }

    console.log(newArr.join(' '));
}

maxNumber([1, 4, 3, 2]);