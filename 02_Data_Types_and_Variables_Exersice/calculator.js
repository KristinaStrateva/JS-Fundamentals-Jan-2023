function calculator(num1, char, num2) {
    let result = 0;

    switch (char) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
    }

    console.log(result.toFixed(2));
}

calculator(5, '+', 10);