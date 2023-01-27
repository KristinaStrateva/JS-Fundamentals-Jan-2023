function calculation(numberOne, numberTwo, operator) {
    let result = 0;

    function add() {
        return result = numberOne + numberTwo;
    }
    add();

    function subtract() {
        return result = numberOne - numberTwo;
    }
    subtract();

    function multiply() {
        return result = numberOne * numberTwo;
    }
    multiply();

    function divide() {
        return result = numberOne / numberTwo;
    }
    divide();

    switch (operator) {
        case 'add': return add(); break;
        case 'subtract': return subtract(); break;
        case 'multiply': return multiply(); break;
        case 'divide': return divide(); break;
    }
}

console.log(calculation(5, 5, 'multiply'));