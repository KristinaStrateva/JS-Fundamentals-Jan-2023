function dungeonestDark(input) {
    let initialHealth = 100;

    let inputAsString = input.join('');
    let inputAsStringLength = inputAsString.length;
    let roomsArray = [];
    let room = ``;

    for (let i = 0; i < inputAsStringLength; i++) {
        let currChar = inputAsString[i];

        if (currChar !== '|') {
            room += `${currChar}`;

            if (i === inputAsStringLength - 1) {
                roomsArray.push(room);
            }

        } else {
            roomsArray.push(room);
            room = ``;
            continue;
        }
    }

    let roomsArrayLength = roomsArray.length;
    let health = initialHealth;
    let coins = 0;

    for (let j = 0; j < roomsArrayLength; j++) {
        let currRoom = roomsArray[j];
        let currRoomLength = currRoom.length;
        let itemOrMonster = '';
        let number = 0;
        let bestRoom = 0;

        for (let k = 0; k < currRoomLength; k++) {
            let currChar = currRoom[k];

            if (currChar !== ' ') {
                itemOrMonster += currChar;
            } else {
                for (let l = k + 1; l < currRoomLength; l++) {
                    number += currRoom[l];
                }

                number = Number(number);
                break;
            }
        }

        if (itemOrMonster === 'potion') {
        
            if (health + number > initialHealth) {
                number = initialHealth - health;
                health = initialHealth;
            } else {
                health += number;
            }

            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (itemOrMonster === 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`);

        } else {
            health -= number;

            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);

                bestRoom = j + 1;
                console.log(`Best room: ${bestRoom}`);

                break;
            }
        }
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);