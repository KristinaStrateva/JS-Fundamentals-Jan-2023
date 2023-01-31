function smallestTwoNumbers(numbers) {
    let firstSmallestNum = Math.min(...numbers);
    let newArr = numbers.filter(num => num !== firstSmallestNum);
    let secondSmallestNum = Math.min(...newArr);

    console.log(`${firstSmallestNum} ${secondSmallestNum}`);
}

smallestTwoNumbers([30, 15, 50, 5]);