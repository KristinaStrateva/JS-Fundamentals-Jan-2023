function cupidsDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let neighborhoodLength = neighborhood.length;
    let index = 0;
    let command = input[index];
    index++;
    let jumpLength = 0;

    while (command !== 'Love!') {
        jumpLength += Number(command.split(' ')[1]);

        if (jumpLength >= neighborhoodLength) {
            jumpLength = 0;
        }

        let currHouse = neighborhood[jumpLength];

        if (currHouse === 0) {
            console.log(`Place ${jumpLength} already had Valentine's day.`);
            
        } else {
            neighborhood[jumpLength] = currHouse - 2;

            if (neighborhood[jumpLength] === 0) {
                console.log(`Place ${jumpLength} has Valentine's day.`);
            }
        }

        command = input[index];
        index++;
    }

    console.log(`Cupid's last position was ${jumpLength}.`);

    let isSuccessful = true;
    let houseCounter = 0;

    for (let house of neighborhood) {
        if (house !== 0) {
            isSuccessful = false;
            houseCounter++;
        }
    }

    if (isSuccessful) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${houseCounter} places.`);
    }
}

cupidsDelivery(["2",
    "Jump 1",
    "Jump 2",
    "Jump 1",
    "Jump 2",
    "Jump 1",
    "Jump 3",
    "Love!"])
    ;