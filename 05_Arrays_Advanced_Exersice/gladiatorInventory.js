function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        let currCommand = input[i].split(' ')[0];
        let currInventory = input[i].split(' ')[1];

        if (currCommand === 'Buy') {
            if (!inventory.includes(currInventory)) {
                inventory.push(currInventory);
            }

        } else if (currCommand === 'Trash') {
            if (inventory.includes(currInventory)) {
                inventory.splice(inventory.indexOf(currInventory), 1);
            }

        } else if (currCommand === 'Repair') {
            if (inventory.includes(currInventory)) {
                inventory.splice(inventory.indexOf(currInventory), 1);
                inventory.push(currInventory);
            }

        } else if (currCommand === 'Upgrade') {
            let inventoryToUpdate = '';
            let update = '';
            let counter = 0;

            for (let j = 0; j < currInventory.length; j++) {
                let currLetter = currInventory[j];

                if (currLetter === '-') {
                    counter++;
                    continue;
                }

                if (counter === 0) {
                    inventoryToUpdate += currLetter;
                } else if (counter === 1) {
                    update += currLetter;
                }
            }

            let updatedInventory = `${inventoryToUpdate}:${update}`;

            if (inventory.includes(inventoryToUpdate)) {
                inventory.splice(inventory.indexOf(inventoryToUpdate) + 1, 0, updatedInventory);
            }
        }
    }

    console.log(inventory.join(' '));
}

gladiatorInventory([
    'SWORD Shield Spear',

    'Buy Bag',

    'Trash Shield',

    'Repair Spear',

    'Upgrade Spear-Iron',
]);

console.log('----------------------');

gladiatorInventory([
    'SWORD Shield Spear',

    'Trash Bow',

    'Repair Shield',

    'Upgrade Helmet-V'
]);