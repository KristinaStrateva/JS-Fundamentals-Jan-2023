function trainWagons(input) {
    let wagons = input.shift().split(' ').map(Number);
    let wagonsLength = wagons.length;
    let maxAmountPerWagon = Number(input.shift());
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        let currCommand = input[i];

        if (currCommand.includes('Add')) {
            let currCommandAsArr = currCommand.split(' ');
            let wagonToAdd = Number(currCommandAsArr[1]);
            wagons.push(wagonToAdd);
        } else {
            for (let j = 0; j < wagonsLength; j++) {
                let currWagon = wagons[j];
                let currSum = currWagon + Number(currCommand);

                if (currSum <= maxAmountPerWagon) {
                    wagons[j] = currSum;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

trainWagons([
    '0 0 0 10 2 4',

    '10',

    'Add 10',

    '10',

    '10',

    '10',

    '8',

    '6',
]);