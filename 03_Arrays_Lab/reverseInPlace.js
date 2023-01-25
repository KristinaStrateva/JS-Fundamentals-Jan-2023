function reverseInPlace(input) {
    let inputLength = input.length;

    for (let i = 0; i < inputLength / 2; i++) {
        let currString = input[i];
        input[i] = input[inputLength - 1 - i];
        input[inputLength - 1 - i] = currString;

    }

    let result = ``;

    for (let i = 0; i < inputLength; i++) {
        let currString = input[i];

        result += `${currString} `;
    }

    console.log(result);
}

reverseInPlace(['33', '123', '0', 'dd']);