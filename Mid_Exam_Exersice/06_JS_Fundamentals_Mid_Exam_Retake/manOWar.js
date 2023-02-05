function trakingTheBattle(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());
    let index = 0;
    let command = input[index];
    index++;

    let pirateShipLength = pirateShip.length;
    let warShipLength = warShip.length;

    while (command !== 'Retire') {
        let commandAsArr = command.split(' ');
        let currCommand = commandAsArr[0];

        if (currCommand === 'Fire') {
            let fireIndex = Number(commandAsArr[1]);
            let damage = Number(commandAsArr[2]);

            if (fireIndex >= 0 && fireIndex < warShipLength) {
                warShip[fireIndex] -= damage;

                if (warShip[fireIndex] <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    return;
                }
            }

        } else if (currCommand === 'Defend') {
            let startIndex = Number(commandAsArr[1]);
            let endIndex = Number(commandAsArr[2]);
            let damage = Number(commandAsArr[3]);

            if (startIndex >= 0 && startIndex < pirateShipLength && endIndex >= 0 && endIndex < pirateShipLength) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;

                    if (pirateShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    } 
                }
            }

        } else if (currCommand === 'Repair') {
            let repairIndex = Number(commandAsArr[1]);
            let repairHealth = Number(commandAsArr[2]);

            if (repairIndex >= 0 && repairIndex < pirateShipLength) {
                pirateShip[repairIndex] += repairHealth;

                if (pirateShip[repairIndex] > maxHealth) {
                    pirateShip[repairIndex] = maxHealth;
                }
            }

        } else if (currCommand === 'Status') {
            let twentyPercentagesOfMaxHealth = maxHealth * 0.2;
            let counter = 0;

            for (let section of pirateShip) {
                if (section < twentyPercentagesOfMaxHealth) {
                    counter++;
                }
            }

            console.log(`${counter} sections need repair.`);

        }

        command = input[index];
        index++;
    }

    let pirateSectionsSum = 0;

    for (let section of pirateShip) {
        pirateSectionsSum += section;
    }

    let warShipSectionsSum = 0;

    for (let section of warShip) {
        warShipSectionsSum += section;
    }

    console.log(`Pirate ship status: ${pirateSectionsSum}`);
    console.log(`Warship status: ${warShipSectionsSum}`);
}

trakingTheBattle(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);