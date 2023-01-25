function magicSum(numbers, magicSumNum) {
    let numbersLength = numbers.length;

    for (let i = 0; i < numbersLength; i++) {
        let currNum = numbers[i];

        for (let j = i + 1; j < numbersLength; j++) {
            let nextNum = numbers[j];

            let sum = currNum + nextNum;

            if (sum === magicSumNum) {
                let result = `${currNum} ${nextNum}`;
                console.log(result);
            } else {
                continue;
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);