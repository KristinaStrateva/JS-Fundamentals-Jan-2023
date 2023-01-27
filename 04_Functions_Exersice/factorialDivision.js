function factorialDivision(firstNum, secondNum) {

    function firstNumFactorial(num1) {
        let num1Factorial = 1;

        for (let i = num1; i >= 2; i--) {
            num1Factorial *= i;
        }

        return num1Factorial;
    }

    function secondNumFactorial(num2) {
        let num2Factorial = 1;

        for (let j = num2; j >= 2; j--) {
            num2Factorial *= j;
        }

        return num2Factorial;
    }

    let result = (firstNumFactorial(firstNum) / secondNumFactorial(secondNum)).toFixed(2);

    return result;
}

console.log(factorialDivision(6, 2));