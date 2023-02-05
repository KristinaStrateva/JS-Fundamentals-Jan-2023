function stateOfTheTreasureChest(input) {
    let initialTreasureChest = input.shift().split('|');
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'Yohoho!') {
        let commandAsArr = command.split(' ');
        let commandAsArrLength = commandAsArr.length;
        let currCommand = commandAsArr[0];

        if (currCommand === 'Loot') {

            for (let i = 1; i < commandAsArrLength; i++) {
                let currItem = commandAsArr[i];

                if (!initialTreasureChest.includes(currItem)) {
                    initialTreasureChest.unshift(currItem);
                }
            }

        } else if (currCommand === 'Drop') {
            let commandIndex = Number(commandAsArr[1]);

            if (commandIndex >= 0 && commandIndex < initialTreasureChest.length) {
                let itemToPush = initialTreasureChest[commandIndex];

                initialTreasureChest.splice(commandIndex, 1);
                initialTreasureChest.push(itemToPush);
            }

        } else if (currCommand === 'Steal') {
            let stollenItemsCount = Number(commandAsArr[1]);
            let stollenItems = [];

            if (stollenItemsCount > initialTreasureChest.length) {
                stollenItems = initialTreasureChest.slice(0);
                initialTreasureChest = [];
            } else {
                stollenItems = initialTreasureChest.slice(initialTreasureChest.length - stollenItemsCount);
                initialTreasureChest.splice(initialTreasureChest.length - stollenItemsCount, stollenItemsCount);
            }

            console.log(stollenItems.join(', '))
        }

        command = input[index];
        index++;
    }

    let initialTreasureChestLength = initialTreasureChest.length;
    let totalItemsLength = 0;

    for (let i = 0; i < initialTreasureChestLength; i++) {
        let currItemLength = initialTreasureChest[i].length;

        totalItemsLength += currItemLength;
    }

    if (initialTreasureChestLength > 0) {
        let averageTreasureGain = totalItemsLength / initialTreasureChestLength;

        return `Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`;
    } else {
        return 'Failed treasure hunt.';
    }
}

console.log(stateOfTheTreasureChest(["",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
);