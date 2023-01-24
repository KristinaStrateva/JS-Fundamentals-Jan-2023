function binaryToDecimal(binaryCode) {
    let binaryCodeStr = String(binaryCode);
    let powDigit = binaryCodeStr.length - 1;

    let finalResult = 0;

    for (let i = 0; i < binaryCodeStr.length; i++) {
        let currDigit = Number(binaryCodeStr[i]);

        let result = Math.pow(2, powDigit) * currDigit;

        powDigit--;

        finalResult += result;
    }

    console.log(finalResult);
}

binaryToDecimal(11110000);