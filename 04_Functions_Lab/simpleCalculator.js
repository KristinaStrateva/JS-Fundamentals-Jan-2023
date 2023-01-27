function calculation(numberOne, numberTwo, operator) {
    let result = 0;

    if (operator === 'add') {
        return result = numberOne + numberTwo;
    } else if (operator === 'subtract') {
        return result = numberOne - numberTwo;
    } else if (operator === 'multiply') {
        return result = numberOne * numberTwo;
    } else if (operator === 'divide') {
        return result = numberOne / numberTwo;
    }
}

console.log(calculation(5, 5, 'multiply'));