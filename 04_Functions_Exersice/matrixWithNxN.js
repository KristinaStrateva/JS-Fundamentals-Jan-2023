function matrix(number) {
    let result = [];
    
    for (let row = 1; row <= number; row++) {
        let currRowAsArr = ``;

        for (let j = 0; j < number; j++) {
            currRowAsArr += `${number} `;
        }

        result.push(currRowAsArr);
    }

    return result.join('\n');
}

console.log(matrix(7));