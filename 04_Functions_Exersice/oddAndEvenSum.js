function oddAndEvenSum(number) {
    let numberAsString = number.toString();
    let numberAsStringLength = numberAsString.length;
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numberAsStringLength; i++) {
        let currNum = Number(numberAsString[i]);

        if (currNum % 2 !== 0) {
            oddSum += currNum;
        } else {
            evenSum += currNum;
        }
    }

    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    return result;
}

console.log(oddAndEvenSum(3495892137259234));