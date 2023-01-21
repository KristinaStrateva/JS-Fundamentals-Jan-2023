function lastDigitName(number) {
    let numberStr = String(number);
    let lastDigit = numberStr[numberStr.length - 1];

    let lastDigitName = "";

    if (lastDigit === "0") {
        lastDigitName = "zero";
    } else if (lastDigit === "1") {
        lastDigitName = "one";
    } else if (lastDigit === "2") {
        lastDigitName = "two";
    } else if (lastDigit === "3") {
        lastDigitName = "three";
    } else if (lastDigit === "4") {
        lastDigitName = "four";
    } else if (lastDigit === "5") {
        lastDigitName = "five";
    } else if (lastDigit === "6") {
        lastDigitName = "six";
    } else if (lastDigit === "7") {
        lastDigitName = "seven";
    } else if (lastDigit === "8") {
        lastDigitName = "eight";
    } else if (lastDigit === "9") {
        lastDigitName = "nine";
    }

    console.log(lastDigitName);
}

lastDigitName(1643);