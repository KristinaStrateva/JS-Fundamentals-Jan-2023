function arrayRotation(numbers, rotationsAmount) {
    for (let i = 0; i < rotationsAmount; i++) {
        let numToMove = numbers.shift();
        numbers.push(numToMove);
    }

    console.log(numbers.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);