function radioCrystals(array) {
    let targetThickness = array[0];
    let arrLength = array.length;

    for (let i = 1; i < arrLength; i++) {
        let currThickness = array[i];

        console.log(`Processing chunk ${currThickness} microns`);

        let cut = num => num /= 4;
        let lap = num => num *= 0.8;
        let grind = num => num -= 20;
        let etch = num => num -= 2;
        let xRay = num => num += 1;

        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;
        
        while (currThickness !== targetThickness) {
            while (currThickness / 4 >= targetThickness) {
                cutCounter++;
                currThickness = cut(currThickness)
            }

            if (cutCounter > 0) {
                console.log(`Cut x${cutCounter}`);
                console.log('Transporting and washing');
                currThickness = Math.floor(currThickness);
            }

            while (currThickness * 0.8 >= targetThickness) {
                lapCounter++;
                currThickness = lap(currThickness);
            }

            if (lapCounter > 0) {
                console.log(`Lap x${lapCounter}`);
                console.log('Transporting and washing');
                currThickness = Math.floor(currThickness);
            }

            while (currThickness - 20 >= targetThickness) {
                grindCounter++;
                currThickness = grind(currThickness);
            }

            if (grindCounter > 0) {
                console.log(`Grind x${grindCounter}`);
                console.log('Transporting and washing');
                currThickness = Math.floor(currThickness);
            }

            while (currThickness - 2 >= targetThickness -1) {
                etchCounter++;
                currThickness = etch(currThickness);
            }

            if (etchCounter > 0) {
                console.log(`Etch x${etchCounter}`);
                console.log('Transporting and washing');
                currThickness = Math.floor(currThickness);
            }

            if (currThickness < targetThickness) {
                currThickness = xRay(currThickness);
                console.log('X-ray x1');
            }
        }

        console.log(`Finished crystal ${targetThickness} microns`);
    }
}

radioCrystals([1375, 50000]);