function phoneShop(input) {
    let phonesList = input.shift().split(', ');
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'End') {
        let [currCommand, phoneModel] = command.split(' - ');

        if (currCommand === 'Add') {
            if (!phonesList.includes(phoneModel)) {
                phonesList.push(phoneModel);
            }

        } else if (currCommand === 'Remove') {
            if (phonesList.includes(phoneModel)) {
                phonesList.splice(phonesList.indexOf(phoneModel), 1);
            }

        } else if (currCommand === 'Bonus phone') {
            let [oldPhone, newPhone] = phoneModel.split(':');

            if (phonesList.includes(oldPhone)) {
                phonesList.splice(phonesList.indexOf(oldPhone) + 1, 0, newPhone);
            }

        } else if (currCommand === 'Last') {
            if (phonesList.includes(phoneModel)) {
                phonesList.splice(phonesList.indexOf(phoneModel), 1);
                phonesList.push(phoneModel);
            }
        }

        command = input[index];
        index++;
    }

    console.log(phonesList.join(', '));
}

phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"]);