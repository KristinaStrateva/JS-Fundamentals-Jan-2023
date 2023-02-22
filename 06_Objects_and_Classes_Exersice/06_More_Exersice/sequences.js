function uniqueSequencesOfNums(input) {
    input = input
        .map(sequence => JSON.parse(sequence))
        .map(sequence => sequence.sort((a, b) => b - a));

    let inputLength = input.length;
    let uniqueSequences = [];

    for (let i = 0; i < inputLength; i++) {
        let currSequence = input[i];
        let isUnique = true;
        let counter = 0;

        for (let j = 0; j < i; j++) {
            let otherSequence = input[j];
            let currSequenceLength = currSequence.length;
            let otherSequenceLength = otherSequence.length;

            if (currSequenceLength === otherSequenceLength) {
                for (let k = 0; k < currSequenceLength; k++) {
                    if (currSequence[k] !== otherSequence[k]) {
                        isUnique = true;
                        counter++;
                        break;
                    } else {
                        isUnique = false;
                    }
                }
            } else {
                isUnique = true;
                counter++;
            }

            if (!isUnique) {
                break;
            }
        }

        if (isUnique && counter === i) {
            uniqueSequences.push(currSequence);
        }
    }

    let sortedSequences = uniqueSequences.sort((a, b) => {
        return a.length - b.length
    });

    for (let sequence of sortedSequences) {
        console.log(`[${sequence.join(', ')}]`);
    }
}

uniqueSequencesOfNums(["[-3, -2, -1, 0, 1, 2, 3, 4]",

    "[10, 1, -17, 0, 2, 13]",

    "[2, 8, 0, 4, 9, 11, 7, 10]",

    "[4, -3, 3, -2, 2, -1, 1, 0]"]);
console.log();
console.log('-------------------');
console.log();
uniqueSequencesOfNums(["[7.14, 7.180, 7.339, 80.099]",

    "[-3, -2, -1, 0, 1, 2, 3, 4]",

    "[7.339, 7.180, 7.14, 80.099]",
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
])