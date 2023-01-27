function printDnA(number) {
    let sequence = 'ATCGTTAGGG';
    let sequenceAsArr = sequence.split('');

    for (let i = 0; i < number; i++) {
        let currRow = ``;
        let [currLetter1, currLetter2] = sequenceAsArr.splice(0, 2);

        if (i === 0 || i % 4 === 0) {
            currRow = `**${currLetter1}${currLetter2}**`;
        } else if (i === 1 || i % 4 === 1) {
            currRow = `*${currLetter1}--${currLetter2}*`;
        } else if (i === 2 || i % 4 === 2) {
            currRow = `${currLetter1}----${currLetter2}`;
        } else if (i === 3 || i % 4 === 3) {
            currRow = `*${currLetter1}--${currLetter2}*`;
        }

        console.log(currRow);

        sequenceAsArr.push(currLetter1, currLetter2);
    }
}

printDnA(10);