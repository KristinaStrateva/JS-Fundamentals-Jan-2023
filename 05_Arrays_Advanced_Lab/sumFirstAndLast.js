function sumFirstAndLast(numbers) {
    let firstNum = Number(numbers.shift());
    let lastNum = Number(numbers.pop());

    let result = firstNum + lastNum;
    return result;
}

sumFirstAndLast(['20', '30', '40']);