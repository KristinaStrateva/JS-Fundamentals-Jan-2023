function matchesInMemoryGame(input) {
    let sequence = input[0].split(' ');
    let index = 1;
    let indexesToCheck = input[index];
    index++;
    let movesCounter = 0;

    while (indexesToCheck !== 'end') {
        let firstIndex = Number(indexesToCheck.split(' ')[0]);
        let secondIndex = Number(indexesToCheck.split(' ')[1]);

        movesCounter++;

        if (firstIndex === secondIndex || firstIndex < 0 || firstIndex >= sequence.length || secondIndex < 0 || secondIndex >= sequence.length) {
            let elementsToAdd = `-${movesCounter}a`;
            sequence.splice(sequence.length / 2, 0, elementsToAdd, elementsToAdd);

            console.log('Invalid input! Adding additional elements to the board');
            indexesToCheck = input[index];
            index++;
            continue;
        }

        let firstSymbolToCheck = sequence[firstIndex];
        let secondSymbolToCheck = sequence[secondIndex];

        if (firstSymbolToCheck === secondSymbolToCheck) {
            sequence = sequence.filter(x => x !== firstSymbolToCheck);
            console.log(`Congrats! You have found matching elements - ${firstSymbolToCheck}!`);
        } else {
            console.log('Try again!');
        }

        if (sequence.length === 0) {
            return `You have won in ${movesCounter} turns!`;
        }

        indexesToCheck = input[index];
        index++;
    }

    console.log('Sorry you lose :(');
    console.log(`${sequence.join(' ')}`);
}

console.log(matchesInMemoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    
    ));