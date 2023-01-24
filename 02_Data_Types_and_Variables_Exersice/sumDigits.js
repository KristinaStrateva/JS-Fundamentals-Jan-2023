function sumDigits(number) {
    let numberStr = String(number);
    let numberLength = numberStr.length;
    let sum = 0;

    for (let i = 0; i < numberLength; i++) {
        let currChar = Number(numberStr[i]);
        sum += currChar;
    }

    console.log(sum);
}

sumDigits(245678);