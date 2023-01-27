function numberModification(number) {
    let modificatedNumAsString = number.toString();
    let averageDigitsSum = 0;

    while (averageDigitsSum < 5) {
        let ModificatedNumAsStringLength = modificatedNumAsString.length;
        let currDigitsSum = 0;

        for (let i = 0; i < ModificatedNumAsStringLength; i++) {
            let currDigit = Number(modificatedNumAsString[i]);
            currDigitsSum += currDigit;
        }

        if (currDigitsSum / ModificatedNumAsStringLength >= 5) {
            break;
        } else {
            modificatedNumAsString += '9';
        }
    }

    console.log(modificatedNumAsString);
}

numberModification(5835);