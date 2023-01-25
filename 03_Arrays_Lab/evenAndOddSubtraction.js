function evenOddSubtraction(numbers) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let number of numbers) {
        if (number % 2 === 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }

    let difference = sumEven - sumOdd;
    console.log(difference);
}

evenOddSubtraction([1,2,3,4,5,6]);