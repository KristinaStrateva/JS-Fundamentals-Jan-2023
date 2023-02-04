function calculatingQuantity(input) {
    let foodAmountInGrams = Number(input.shift()) * 1000;
    let hayAmountInGrams = Number(input.shift()) * 1000;
    let coverAmountInKg = Number(input.shift());
    let pigsWeght = Number(input.shift());
    let isEnough = true;

    for (let day = 1; day <= 30; day++) {
        foodAmountInGrams -= 300;

        if (day % 2 === 0) {
            hayAmountInGrams -= 0.05 * foodAmountInGrams;
        }

        if (day % 3 === 0) {
            coverAmountInKg -= pigsWeght / 3;
        }

        if (foodAmountInGrams <= 0 || hayAmountInGrams <= 0 || coverAmountInKg <= 0) {
            isEnough = false;
            break;
        }
    }

    if (isEnough) {
        let foodAmountInKg = foodAmountInGrams / 1000;
        let hayAmountInKg = hayAmountInGrams / 1000;

        return `Everything is fine! Puppy is happy! Food: ${foodAmountInKg.toFixed(2)}, Hay: ${hayAmountInKg.toFixed(2)}, Cover: ${coverAmountInKg.toFixed(2)}.`;
    } else {
        return `Merry must go to the pet store!`;
    }
}

console.log(calculatingQuantity(["9",
"5",
"5.2",
"1"])
);