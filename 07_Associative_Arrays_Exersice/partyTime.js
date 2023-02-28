function guestsCheck(input) {
    let vipList = [];
    let regularList = [];
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'PARTY') {
        if (!isNaN(command[0])) {
            vipList.push(command);
        } else {
            regularList.push(command);
        }

        command = input[index];
        index++;
    }

    let allGuestsList = vipList.concat(regularList);

    for (let i = index; i < input.length; i++) {
        let guestNameToCheck = input[i];
        
        if (allGuestsList.includes(guestNameToCheck)) {
            allGuestsList.splice(allGuestsList.indexOf(guestNameToCheck), 1);
        }
    }

    console.log(allGuestsList.length);
    for (const guest of allGuestsList) {
        console.log(guest);
    }
}

guestsCheck(['m8rfQBvl', 'fc1oZCE0','UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ]);