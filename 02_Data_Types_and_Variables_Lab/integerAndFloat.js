function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;

    let numberType = "";

    if (sum % 1 === 0) {
        numberType = "Integer";
    } else {
        numberType = "Float";
    }

    console.log(`${sum} - ${numberType}`);
}

integerAndFloat(100, 200, 303);