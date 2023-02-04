function arrangingShoppingList(input) {
    let initialShoppingList = input.shift().split('!');
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'Go Shopping!') {
        let commandAsArr = command.split(' ');
        let currCommand = commandAsArr[0];
        let item = commandAsArr[1];

        if (currCommand === 'Urgent') {
            if (!initialShoppingList.includes(item)) {
                initialShoppingList.unshift(item);
            }

        } else if (currCommand === 'Unnecessary') {
            if (initialShoppingList.includes(item)) {
                initialShoppingList = initialShoppingList.filter(x => x !== item);
            }

        } else if (currCommand === 'Correct') {
            let itemToAdd = commandAsArr[2];

            if (initialShoppingList.includes(item)) {
                let indexOfOldItem = initialShoppingList.indexOf(item);

                initialShoppingList.splice(indexOfOldItem, 1, itemToAdd);
            }

        } else if (currCommand === 'Rearrange') {
            if (initialShoppingList.includes(item)) {
                let indexOfTheItem = initialShoppingList.indexOf(item);

                initialShoppingList.splice(indexOfTheItem, 1);
                initialShoppingList.push(item);
            }
        }

        command = input[index];
        index++;
    }

    return initialShoppingList.join(', ');
}

console.log(arrangingShoppingList(["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",

"Unnecessary Grapes",

"Correct Pepper Onion","Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]));