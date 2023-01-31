function smallestTwoNumbers(numbers) {
    let sortedNumbers = numbers.sort((a, b) => a - b);
    let smallestTwoNums = sortedNumbers.slice(0, 2);

    return smallestTwoNums.join(' ');
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));