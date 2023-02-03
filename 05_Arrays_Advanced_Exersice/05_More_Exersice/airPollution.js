function airPollution(map, forces) {
    let mapAsMatrixOfIntegers = map.map(row => row.split(' ').map(Number));
    let forcesLength = forces.length;

    for (let force = 0; force < forcesLength; force++) {
        let currForce = forces[force].split(' ')[0];
        let currValueOfTheForce = Number(forces[force].split(' ')[1]);

        if (currForce === 'breeze') {
            for (let row = 0; row < 5; row++) {

                if (row === currValueOfTheForce) {
                    for (let col = 0; col < 5; col++) {
                        mapAsMatrixOfIntegers[row][col] -= 15;

                        if (mapAsMatrixOfIntegers[row][col] < 0) {
                            mapAsMatrixOfIntegers[row][col] = 0;
                        }
                    }
                }
            }

        } else if (currForce === 'gale') {
            for (let col = 0; col < 5; col++) {

                if (col === currValueOfTheForce) {
                    for (let row = 0; row < 5; row++) {
                        mapAsMatrixOfIntegers[row][col] -= 20;

                        if (mapAsMatrixOfIntegers[row][col] < 0) {
                            mapAsMatrixOfIntegers[row][col] = 0;
                        }
                    }
                }
            }

        } else if (currForce === 'smog') {
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    mapAsMatrixOfIntegers[row][col] += currValueOfTheForce;
                }
            }
        }
    }

    let isPolluted = false;
    let pollutedBlocks = [];

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            let currBlock = mapAsMatrixOfIntegers[row][col];

            if (currBlock >= 50) {
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

airPollution(['5 7 2 14 4',

'21 14 2 5 3',

'3 16 7 42 12',

'2 20 8 39 14',

'7 34 1 10 24'],

['breeze 1', 'gale 2', 'smog 35']
);