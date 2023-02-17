function lift(input) {
    let people = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);

    for (let i = 0; i < wagons.length; i++) {
        let currWagon = wagons[i];

        if (currWagon === 4) {
            continue;
        }

        if (people >= 4 - currWagon) {
            people -= 4 - currWagon;
            wagons[i] = 4;

        } else if (people < 4 - currWagon) {
            wagons[i] = currWagon + people;
            people = 0;
            break;
        }
    }

    let isFull = true;

    for (const wagon of wagons) {
        if (wagon !== 4) {
            isFull = false;
            break;
        }
    }

    if (people === 0 && isFull === false) {
        console.log('The lift has empty spots!');
    } else if (people > 0 && isFull) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    
    console.log(wagons.join(' '));
}

lift([
    "15",
    "0 0 0 0 0"
   ]
   );