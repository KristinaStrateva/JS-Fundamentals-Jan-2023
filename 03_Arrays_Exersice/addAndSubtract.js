function addAndSubtract(numbers) {
    let newArr = [];
    let numbersLength = numbers.length;
    let sumOfOriginArr = 0;
    let sumOfNewArr = 0;

    for (let i = 0; i < numbersLength; i++) {
        let currNum = numbers[i];
        sumOfOriginArr += currNum;

        if (currNum % 2 === 0) {
            let result = currNum + i;
            newArr[i] = result;
            sumOfNewArr += result;
        } else {
            let result = currNum - i;
            newArr[i] = result;
            sumOfNewArr += result;
        }
    }

    console.log(newArr);
    console.log(sumOfOriginArr);
    console.log(sumOfNewArr);
}

addAndSubtract([5, 15, 23, 56, 35]);