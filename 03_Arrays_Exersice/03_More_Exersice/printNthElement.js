function printNthElement(input) {
    let inputLength = input.length;
    let lastElement = Number(input[inputLength - 1]);
    let newArr = [];

    for (let i = 0; i < inputLength - 1; i += lastElement) {
        let currString = input[i];

        newArr.push(currString);
    }

    console.log(newArr.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '3']);