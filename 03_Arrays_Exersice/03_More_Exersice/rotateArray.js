function rotateArray(input) {
    let inputLength = input.length;
    let newArr = [];
    let rotationsAmount = Number(input[inputLength - 1]);
    let counter = 0;

    for (let i = 0; i < inputLength - 1; i++) {
        let currString = input[i];

        newArr.push(currString);
    }

    while (counter !== rotationsAmount) {
        let currStringToRotate = newArr.pop();
        counter++;

        newArr.unshift(currStringToRotate);

    }

    console.log(newArr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);