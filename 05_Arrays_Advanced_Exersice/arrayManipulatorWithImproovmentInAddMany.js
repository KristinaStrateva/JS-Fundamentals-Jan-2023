function arrayManipulator(numbers, commands) {
    let commandsLength = commands.length;

    for (let i = 0; i < commandsLength; i++) {
        let currCommand = commands[i].split(' ');

        if (currCommand.includes('add')) {
            numbers.splice(Number(currCommand[1]), 0, Number(currCommand[2]));

        } else if (currCommand.includes('addMany')) {
            let index = Number(currCommand[1]);
            let newArr = currCommand.slice(2).map(Number);
            
            numbers.splice(index, 0, ...newArr);

        } else if (currCommand.includes('contains')) {
            let index = numbers.indexOf(Number(currCommand[1]));
            console.log(index);

        } else if (currCommand.includes('remove')) {
            numbers.splice(Number(currCommand[1]), 1);

        } else if (currCommand.includes('shift')) {
            let positionsToMove = Number(currCommand[1]);
            let buff = 0;

            while (buff < positionsToMove) {
                let element = numbers.shift();
                numbers.push(element);
                buff++;
            }

        } else if (currCommand.includes('sumPairs')) {
            let numbersLength = numbers.length;
            let newArr = [];

            for (let l = 0; l < numbersLength; l += 2) {
                let firstEl = numbers[l];
                let secondEl = numbers[l + 1];

                if (l === numbersLength - 1 && numbersLength % 2 !== 0) {
                    secondEl = 0;
                }

                let sum = firstEl + secondEl;
                newArr.push(sum);
            }

            numbers = newArr.slice(0);

        } else if (currCommand.includes('print')) {
            console.log(`[ ${numbers.join(', ')} ]`);

            break;
        }
    }
}

arrayManipulator(
    [1, 2, 3, 4, 5],

    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);

arrayManipulator([1, 2, 4, 5, 6, 7],

    ['add 1 8', 'contains 1', 'contains 3', 'print'])