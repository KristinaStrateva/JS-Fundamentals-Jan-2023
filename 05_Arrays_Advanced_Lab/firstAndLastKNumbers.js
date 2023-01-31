function firstAndLastKNumbers(input) {
    let kElement = input.shift();

    let firstKElement = input.slice(0, kElement);
    let lastKElement = input.slice(input.length - kElement);

    console.log(firstKElement.join(' '));
    console.log(lastKElement.join(' '));
}

firstAndLastKNumbers([3, 6, 7, 8, 9]);