function palindromeIntegers(arrayOfNumbers) {
    let arrayOfNumbersLength = arrayOfNumbers.length;

    for (let i = 0; i < arrayOfNumbersLength; i++) {
        let currNum = arrayOfNumbers[i].toString();
        let reversedCurrNum = currNum.split('').reverse().join('');
        let isPalindrome = false;

        if (currNum === reversedCurrNum) {
            isPalindrome = true;
        }

        console.log(isPalindrome);
    }
}

palindromeIntegers([32,2,232,1010]);