function craftingItems(input) {
    let items = input.shift().split(', ');
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'Craft!') {
        let currCommand = command.split(' - ')[0];
        let currItem = command.split(' - ')[1];

        if (currCommand === 'Collect') {
            if (!items.includes(currItem)) {
                items.push(currItem);
            }

        } else if (currCommand === 'Drop') {
            if (items.includes(currItem)) {
                items = items.filter(x => x !== currItem);
            }

        } else if (currCommand === 'Combine Items') {
            let oldItem = currItem.split(':')[0];
            let newItem = currItem.split(':')[1];

            if (items.includes(oldItem)) {
                let oldItemIndex = items.indexOf(oldItem);

                items.splice(oldItemIndex + 1, 0, newItem);
            }

        } else if (currCommand === 'Renew') {
            if (items.includes(currItem)) {
                items = items.filter(x => x !== currItem);
                items.push(currItem);
            }
        }

        command = input[index];
        index++;
    }

    return items.join(', ');
}

console.log(craftingItems([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]  
  ));