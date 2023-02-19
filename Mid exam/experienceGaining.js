function fullingTank(input) {
    let experienceNeeded = input.shift();
    let battlesAmount = input.shift();
    let index = 0;
    let experiencePerBattle = input[index];
    index++;
    let isFull = false;
    let counter = 0;
    let sum = 0;

    while (sum < experienceNeeded) {

        sum += experiencePerBattle;
        counter++;

        if (sum >= experienceNeeded) {
            isFull = true;
            break;
        }

        if (counter % 3 === 0) {
            sum += experiencePerBattle * 0.15;
        }

        if (sum >= experienceNeeded) {
            isFull = true;
            break;
        }

        if (counter % 5 === 0) {
            sum -= experiencePerBattle * 0.1;
        }

        if (sum >= experienceNeeded) {
            isFull = true;
            break;
        }

        if (counter % 15 === 0) {
            sum += experiencePerBattle * 0.05;
        }

        if (sum >= experienceNeeded) {
            isFull = true;
            break;
        }

        experiencePerBattle = input[index];
        index++;
    }

    if (isFull) {
        console.log(`Player successfully collected his needed experience for ${counter} battles.`);
    } else {
        let experienceLeft = experienceNeeded - sum;
        console.log(`Player was not able to collect the needed experience, ${experienceLeft.toFixed(2)} more needed.`);
    }
}

fullingTank([500,
    5,
    50,
    100,
    200,
    100,
    20])    
    ;