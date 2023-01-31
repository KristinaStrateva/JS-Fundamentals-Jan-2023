function sequenceOfKNumbersSum(arrLength, lastNumsToSum) {
    let arr = [1];

    for (let i = 1; i < arrLength; i++) {
        let currArrLength = arr.length;
        let lastKElements = Math.max(currArrLength - lastNumsToSum, 0);
        let currSum = 0;

        let currNumsToSumAsArr = arr.slice(lastKElements);
        let currNumsToSumAsArrLength = currNumsToSumAsArr.length;

        for (let j = 0; j < currNumsToSumAsArrLength; j++) {
            currSum += currNumsToSumAsArr[j];
        }

        arr.push(currSum);
    }

    console.log(arr.join(' '));
}

sequenceOfKNumbersSum(8, 2);