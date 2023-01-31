function bombNumbers(sequenceOfNums, bombAndItsPower) {
    let bombNum = bombAndItsPower.shift();
    let bombPower = bombAndItsPower.shift();

    for (let i = 0; i < sequenceOfNums.length; i++) {
        let currNum = sequenceOfNums[i];
        if (currNum === bombNum) {
            let bombNumIndex = i;
            let startIndex = bombNumIndex - bombPower;
            let detonatedIndexes = bombPower * 2 + 1;

            while (startIndex < 0) {
                startIndex++;
                detonatedIndexes--;
            }

            sequenceOfNums.splice(startIndex, detonatedIndexes);

            i--;
        }
    }

    let sequenceOfNumsLength = sequenceOfNums.length;
    let sum = 0;

    for (let i = 0; i < sequenceOfNumsLength; i++) {
        let currNum = sequenceOfNums[i];
        sum += currNum;
    }

    // let reducer = (a, b) => a + b;   --> Alternate solution
    // let sum = sequenceOfNums.reduce(reducer, 0);
    return sum;
}

console.log(bombNumbers(
    [2, 2, 2, 1],

    [2, 1]
));