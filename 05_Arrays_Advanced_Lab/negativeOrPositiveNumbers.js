function negativeOrPositiveNumbers(numbers) {
    let numbersLength = numbers.length;
    let newArr = [];

    for (let i = 0; i < numbersLength; i++) {
        let currNum = Number(numbers[i]);

        if (currNum >= 0) {
            newArr.push(currNum);
        } else {
            newArr.unshift(currNum);
        }
    }

    return newArr.join('\n');
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);