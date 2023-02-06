function winsAndEnergyAmount(input) {
    let initialEnergy = Number(input.shift());
    let index = 0;
    let distance = input[index];
    index++;
    let winsAmount = 0;

    while (distance !== 'End of battle') {
        distance = Number(distance);

        initialEnergy -= distance;

        if (initialEnergy < 0) {
            initialEnergy += distance;
            return `Not enough energy! Game ends with ${winsAmount} won battles and ${initialEnergy} energy`;
        }

        winsAmount++;

        if (winsAmount % 3 === 0) {
            initialEnergy += winsAmount;
        }

        distance = input[index];
        index++;
    }

    return `Won battles: ${winsAmount}. Energy left: ${initialEnergy}`;
}

console.log(winsAndEnergyAmount((["200",
"54",
"14",
"28",
"13",
"End of battle"])));