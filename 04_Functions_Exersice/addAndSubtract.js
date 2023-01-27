function addAndSubtract(num1, num2, num3) {
    function add(firstNum, secondNum) {
        let result = firstNum + secondNum;

        return result;
    }

    let subtract = add(num1, num2) - num3;

    return subtract;
}

console.log(addAndSubtract(1, 17, 30));