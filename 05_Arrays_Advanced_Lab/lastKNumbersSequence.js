function sequenceOfKNumbersSum(arrLength, lastNumsToSum) {
    let arr = [1];

    for (let i = 1; i < arrLength; i++) {
        let currArrLength = arr.length;
        let currSum = 0;

        if (currArrLength <= lastNumsToSum){
            for (let k = 0; k < currArrLength; k++) {
                let firstKNumsToSumAsArr = arr[k];
                currSum += firstKNumsToSumAsArr;
            }

            arr.push(currSum);
            continue;
        }

        let currNumsToSumAsArr = arr.slice(currArrLength - lastNumsToSum);
        let currNumsToSumAsArrLength = currNumsToSumAsArr.length;

        for (let j = 0; j < currNumsToSumAsArrLength; j++) {
            currSum += currNumsToSumAsArr[j];
        }

        arr.push(currSum);
    }

    console.log(arr.join(' '));
}

sequenceOfKNumbersSum(8, 2);