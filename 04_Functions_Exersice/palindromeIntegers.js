function palindromeIntegers(arrayOfNumbers) {
    let arrayOfNumbersLength = arrayOfNumbers.length;

    for (let i = 0; i < arrayOfNumbersLength; i++) {
        let currNumAsString = arrayOfNumbers[i].toString();
        let currNumAsStringLength = currNumAsString.length;
        let currNumReversed = ``;
        let isPalindrome = false;

        for (let j = currNumAsStringLength - 1; j >= 0; j--) {
            let currDigit = currNumAsString[j];
            currNumReversed += `${currDigit}`;
        }

        if (currNumReversed == currNumAsString) {
            isPalindrome = true;
        }

        console.log(isPalindrome);
    }
}

palindromeIntegers([32,2,232,1010]);