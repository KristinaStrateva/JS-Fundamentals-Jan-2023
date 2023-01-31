function processOddNumbers(numbers) {
    let newArr = [];
    let numsOnOddPosition = numbers.filter((x, i) => i % 2 !== 0);
    let numsOnOddPositionLength = numsOnOddPosition.length;

    for (let index = 0; index < numsOnOddPositionLength; index++) {
        let currNum = numsOnOddPosition[index];
        currNum *= 2;
        newArr.unshift(currNum);
    }

    return newArr.join(' ');
}

console.log(processOddNumbers([10, 15, 20, 25]));