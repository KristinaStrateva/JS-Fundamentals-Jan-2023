function maxNumber(numbers) {
    let numbersLength = numbers.length;
    let result = ``;

    for (let i = 0; i < numbersLength; i++) {
        let isBigger = true;
        
        for (let j = i + 1; j < numbersLength; j++) {
            if (numbers[i] <= numbers[j]) {
                isBigger = false;
            }
        }
        
        if (isBigger) {
            result += `${numbers[i]} `;
        }
    }

    console.log(result);
}

maxNumber([1, 4, 3, 2]);