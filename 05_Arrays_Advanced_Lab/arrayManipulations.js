function arrayManipulations(input) {
    let array = input[0].split(' ').map(Number);
    let inputLength = input.length;

    function add(num) {
        return array.push(num);
    }

    function remove(num) {
        array = array.filter(x => x !== num);
        return array;
    }

    function removeAt(num) {        
        return array.splice(num, 1);
    }

    function insert(num, i) {
        return array.splice(i, 0, num);
    }

    for (let i = 1; i < inputLength; i++) {
        let currCommand = input[i].split(' ');
        let command = currCommand[0];

        if (command === 'Add') {
            let number = Number(currCommand[1]);
            add(number);
        } else if (command === 'Remove') {
            let number = Number(currCommand[1]);
            remove(number);
        } else if (command === 'RemoveAt') {
            let number = Number(currCommand[1]);
            removeAt(number);
        } else if (command === 'Insert') {
            let number = Number(currCommand[1]);
            let index = Number(currCommand[2]);
            insert(number, index);
        }
    }

    console.log(array.join(' '));
}

arrayManipulations([
    '6 12 2 65 6 42',

    'Add 8',

    'Remove 12',

    'RemoveAt 3',

    'Insert 6 2'
]);