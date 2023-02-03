function jansNotation(input) {
    let inputLength = input.length;
    let newArr = [];
    let isTooFew = false;

    for (let i = 0; i < inputLength; i++) {
        let currCommand = input[i];
        let prevNum = newArr[newArr.length - 1];
        let prevPrevNum = newArr[newArr.length - 2];

        if (newArr.length === 1 && typeof currCommand !== 'number') {
            isTooFew = true;
            break;
        }

        switch (currCommand) {
            case '+':
                function add(num1, num2) {
                    let sum = num1 + num2;
                    return sum;
                }

                newArr.splice(newArr.length - 2, 2, add(prevPrevNum, prevNum));
                break;

            case '-':
                function subtract(num1, num2) {
                    let sub = num1 - num2;
                    return sub;
                }

                newArr.splice(newArr.length - 2, 2, subtract(prevPrevNum, prevNum));
                break;

            case '*':
                function multiplication(num1, num2) {
                    let mult = num1 * num2;
                    return mult;
                }

                newArr.splice(newArr.length - 2, 2, multiplication(prevPrevNum, prevNum));
                break;

            case '/':
                function division(num1, num2) {
                    let div = num1 / num2;
                    return div;
                }

                newArr.splice(newArr.length - 2, 2, division(prevPrevNum, prevNum));
                break;

            default: newArr.push(currCommand); break;
        }
    }

    if (isTooFew || input.length === 1) {
        console.log('Error: not enough operands!');
    } else if (newArr.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(newArr.join(''));
    }
}

jansNotation(['/']);