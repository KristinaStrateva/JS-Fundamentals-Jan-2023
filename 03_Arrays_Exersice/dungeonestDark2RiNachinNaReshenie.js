function dungeonestDark(input) {
    let roomsAsArr = input.join('').split('|');
    let roomsAsArrLength = roomsAsArr.length;
    let health = 100;
    let coins = 0;
    let bestRoom = 0;

    for (let i = 0; i < roomsAsArrLength; i++) {
        let currRoomAsArr = roomsAsArr[i].split(' ');
        let itemOrMonster = currRoomAsArr[0];
        let number = Number(currRoomAsArr[1]);

        if (itemOrMonster === 'potion') {
            if (health + number > 100) {
                number = 100 - health;
                health = 100;
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

                bestRoom = i + 1;
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

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);