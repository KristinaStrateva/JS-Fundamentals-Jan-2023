function plunderGained(input) {
    let daysOfPlunder = Number(input.shift());
    let dailyPlunderAmount = Number(input.shift());
    let plunderTarget = Number(input.shift());

    let totalPlunderGain = 0;

    for (let day = 1; day <= daysOfPlunder; day++) {
        totalPlunderGain += dailyPlunderAmount;

        if (day % 3 === 0) {
            totalPlunderGain += dailyPlunderAmount * 0.5;
        }
        
        if (day % 5 === 0) {
            totalPlunderGain *= 0.7;
        }
    }

    if (totalPlunderGain >= plunderTarget) {
        return `Ahoy! ${totalPlunderGain.toFixed(2)} plunder gained.`;
    } else {
        let percentageLeft = (totalPlunderGain / plunderTarget) * 100;

        return `Collected only ${percentageLeft.toFixed(2)}% of the plunder.`;
    }
}

console.log(plunderGained(["0", "40", "0"]));