function muOnline(rooms) {
    let roomsAsArr = rooms.split('|');
    let roomsAsArrLength = roomsAsArr.length;
    let initialHealth = 100;
    let bitcoins = 0;

    for (let room = 0; room < roomsAsArrLength; room++) {
        let commandOrMonster = roomsAsArr[room].split(' ')[0];
        let amountOrAttack = Number(roomsAsArr[room].split(' ')[1]);

        if (commandOrMonster === 'potion') {

            if (initialHealth + amountOrAttack > 100) {
                amountOrAttack = 100 - initialHealth;
                initialHealth = 100;
            } else {
                initialHealth += amountOrAttack;
            }

            console.log(`You healed for ${amountOrAttack} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);

        } else if (commandOrMonster === 'chest') {
            bitcoins += amountOrAttack;
            console.log(`You found ${amountOrAttack} bitcoins.`);

        } else {
            initialHealth -= amountOrAttack;

            if (initialHealth > 0) {
                console.log(`You slayed ${commandOrMonster}.`);
            } else {
                console.log(`You died! Killed by ${commandOrMonster}.`);
                console.log(`Best room: ${room + 1}`);
                return;
            }
        }
    }

    console.log('You\'ve made it!');
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${initialHealth}`);
}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");