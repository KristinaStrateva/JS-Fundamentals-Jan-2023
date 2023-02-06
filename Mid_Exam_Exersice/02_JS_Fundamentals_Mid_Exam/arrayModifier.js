function modifyingElements(input) {
    let arrOfElements = input.shift().split(' ').map(Number);
    let arrOfElementsLength = arrOfElements.length;
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'end') {
        let currCommand = command.split(' ')[0];
        let indexOne = command.split(' ')[1];
        let indexTwo = command.split(' ')[2];

        if (currCommand === 'swap') {
            let elOne = arrOfElements[indexOne];
            let elTwo = arrOfElements[indexTwo];

            arrOfElements[indexOne] = elTwo;
            arrOfElements[indexTwo] = elOne;

        } else if (currCommand === 'multiply') {
            let elOne = arrOfElements[indexOne];
            let elTwo = arrOfElements[indexTwo];

            let multiplication = elOne * elTwo;
            arrOfElements[indexOne] = multiplication;

        } else if (currCommand === 'decrease') {
            for (let i = 0; i < arrOfElementsLength; i++) {
                arrOfElements[i]--;
            }
        }

        command = input[index];
        index++;
    }

    return `${arrOfElements.join(', ')}`;
}

console.log(modifyingElements([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  ));