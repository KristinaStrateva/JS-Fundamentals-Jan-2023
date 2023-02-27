function parkingLotArranging(input) {
    let inputLength = input.length;
    let parkingLot = {};

    for (let i = 0; i < inputLength; i++) {
        let [command, carNumber] = input[i].split(', ');

        if (command === 'IN') {
            parkingLot[carNumber] = command;
        } else if (command === 'OUT') {
            delete parkingLot[carNumber];
        }
    }

    let sortedCarNumbers = Object.entries(parkingLot).sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedCarNumbers.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        sortedCarNumbers.forEach(carNumber => {
            console.log(carNumber[0]);
        });
    }
}

parkingLotArranging([
    'IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU'
]);