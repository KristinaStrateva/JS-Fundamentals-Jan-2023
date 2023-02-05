function findingPlceOnTheLift(input) {
    let peopleInTheQueue = Number(input[0]);
    let liftWagonsState = input[1].split(' ').map(Number);
    let liftWagonsLength = liftWagonsState.length;
    let fullWagonsCounter = liftWagonsLength;
    let isFull = false;
    let index = 0;

    while (peopleInTheQueue > 0) {
        let currWagonState = liftWagonsState[index];

        for (let i = currWagonState; i < 4; i++) {

            liftWagonsState[index]++;
            peopleInTheQueue--;

            if (peopleInTheQueue === 0) {
                break;
            }
        }

        if (liftWagonsState[index] === 4) {
            fullWagonsCounter--;
        }

        if (fullWagonsCounter === 0) {
            isFull = true;
            break;
        }

        index++;
    }

    if (isFull && peopleInTheQueue !== 0) {
        console.log(`There isn't enough space! ${peopleInTheQueue} people in a queue!`);
        console.log(`${liftWagonsState.join(' ')}`);
    } else if (isFull && peopleInTheQueue === 0) {
        console.log(`${liftWagonsState.join(' ')}`);
    } else {
        console.log('The lift has empty spots!');
        console.log(`${liftWagonsState.join(' ')}`);
    }
}

findingPlceOnTheLift([
    "20",
    "0 2 0"
   ]
   );