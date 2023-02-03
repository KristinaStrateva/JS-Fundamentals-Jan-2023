function airPollution(map, forces) {
    let mapAsMatrixOfIntegers = map.map(row => row.split(' ').map(Number));
    let forcesLength = forces.length;
    let mapAsMatrixOfIntegersLength = mapAsMatrixOfIntegers.length;
    let isPolluted = false;
    let pollutedBlocks = [];

    for (let force = 0; force < forcesLength; force++) {
        let currForce = forces[force].split(' ')[0];
        let currValue = Number(forces[force].split(' ')[1]);
        
        if (currForce === 'breeze') {
            mapAsMatrixOfIntegers = breeze(mapAsMatrixOfIntegers, currValue);

        } else if (currForce === 'gale') {
            mapAsMatrixOfIntegers = gale(mapAsMatrixOfIntegers, currValue);

        } else if (currForce === 'smog') {
            mapAsMatrixOfIntegers = smog(mapAsMatrixOfIntegers, currValue);
        }
    }

    function breeze(input, row) {
        let inputLength = input.length;

        for (let col = 0; col < inputLength; col++){
            let currBlockValue = input[row][col];

            if (currBlockValue - 15 < 0) {
                input[row][col] = 0;
                continue;
            }

            input[row][col] -= 15;
        }

        return input;
    }

    function gale(input, col) {
        let inputLength = input.length;

        for (let row = 0; row < inputLength; row++) {
            let currBlockValue = input[row][col];

            if (currBlockValue - 20 < 0) {
                input[row][col] = 0;
                continue;
            }

            input[row][col] -= 20;
        }

        return input;
    }

    function smog(input, value) {
        let inputLength = input.length;

        for (let row = 0; row < inputLength; row++) {
            for (let col = 0; col < inputLength; col++) {
                let currBlockValue = input[row][col];

                input[row][col] = currBlockValue + value;
            }
        }

        return input;
    }

    for (let row = 0; row < mapAsMatrixOfIntegersLength; row++) {
        for (let col = 0; col < mapAsMatrixOfIntegers[row].length; col++) {
            let currBlockValue = mapAsMatrixOfIntegers[row][col];

            if (currBlockValue >= 50) {
                isPolluted = true;
                let result = `[${row}-${col}]`;

                pollutedBlocks.push(result);
            }
        }
    }

    if (isPolluted) {
        console.log(`Polluted areas: ${pollutedBlocks.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}

airPollution(['5 7 72 14 4',

'41 35 37 27 33',

'23 16 27 42 12',

'2 20 28 39 14',

'16 34 31 10 24'],

['breeze 1', 'gale 2', 'smog 25']);