function equalSums(input) {
    let inputLength = input.length;
    let isEqual = false;
    let equalIndex = 0;

    for (let i = 0; i < inputLength; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let leftNum = 0; leftNum < i; leftNum++) {
            let currNum = input[leftNum];
            leftSum += currNum;
        }

        for (let rightNum = i + 1; rightNum < inputLength; rightNum++) {
            let currNum = input[rightNum];
            rightSum += currNum;
        }

        if (leftSum === rightSum) {
            isEqual = true;
            equalIndex = i;
        }
    }

    if (isEqual) {
        console.log(equalIndex);
    } else {
        console.log('no');
    }
}

equalSums([10]);