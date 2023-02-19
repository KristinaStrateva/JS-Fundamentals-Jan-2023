function taxCalculator(input) {
    let vehicles = input[0].split('>>');
    let vehiclesLength = vehicles.length;
    let tax = 0;

    for (let i = 0; i < vehiclesLength; i++) {
        let [carType, years, kilometers] = vehicles[i].split(' ');
        years = Number(years);
        kilometers = Number(kilometers);

        if (carType === 'family') {
            let currTax = 50;

            currTax -= years * 5;

            if (kilometers / 3000 > 0) {
                let amount = Math.trunc(kilometers / 3000);

                currTax += amount * 12;
            }

            tax += currTax;

            console.log(`A ${carType} car will pay ${currTax.toFixed(2)} euros in taxes.`);

        } else if (carType === 'heavyDuty') {
            let currTax = 80;
            currTax -= years * 8;

            if (kilometers / 9000 > 0) {
                let amount = Math.trunc(kilometers / 9000);

                currTax += amount * 14;
            }

            tax += currTax;

            console.log(`A ${carType} car will pay ${currTax.toFixed(2)} euros in taxes.`);

        } else if (carType === 'sports') {
            let currTax = 100;
            currTax -= years * 9;

            if (kilometers / 2000 > 0) {
                let amount = Math.trunc(kilometers / 2000);

                currTax += amount * 18;
            }

            tax += currTax;

            console.log(`A ${carType} car will pay ${currTax.toFixed(2)} euros in taxes.`);
        } else {
            console.log('Invalid car type.');
            continue;
        }
    }

    console.log(`The National Revenue Agency will collect ${tax.toFixed(2)} euros in taxes.`);
}

taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);