function calculation(numberOne, numberTwo, operator) {
    let result = 0;

    switch (operator) {
        case 'add': 
        function add() {
            return result = numberOne + numberTwo;
        }
        add();
        break;
        case 'subtract': 
        function subtract() {
            return result = numberOne - numberTwo;
        }
        subtract();
        break;
        case 'multiply': 
        function multiply() {
            return result = numberOne * numberTwo;
        }
        multiply();
        break;
        case 'divide':
        function divide() {
            return result = numberOne / numberTwo;
        }
        divide();
        break;
    }

    return result;
}

console.log(calculation(5, 5, 'multiply'));