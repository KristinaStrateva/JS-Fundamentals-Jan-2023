function sorting(numbers) {
    numbers.sort((a, b) => a - b);
    let numbersLength = numbers.length;
    let newArr = [];

    for (let i = 0; i < numbersLength / 2; i++) {
        newArr.push(numbers.pop());
        newArr.push(numbers.shift());
    }
    
    console.log(newArr.join(' '));
}

sorting([12, 3, 2, 10, 5])
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 100]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47, 100]);