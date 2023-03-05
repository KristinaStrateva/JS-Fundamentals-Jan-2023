function travelTime(input) {
    let country = {};

    for (let info of input) {
        let [currCountry, townName, travelCost] = info.split(' > ');

        if (!country.hasOwnProperty(currCountry)) {
            country[currCountry] = [{[townName]: Number(travelCost)}];

        } else {
            let currCountryValue = country[currCountry];
            travelCost = Number(travelCost);

            for (let town of currCountryValue) {
                if (town.hasOwnProperty(townName)) {
                    if (town[townName] > travelCost) {
                        town[townName] = travelCost;
                    }

                    break;

                } else {
                    town[townName] = travelCost;
                }
            }
        }
    }

    let sortedCountries = Object.entries(country).sort((a, b) => a[0].localeCompare(b[0]));

    for (const country of sortedCountries) {
        let sortedTowns = Object.entries(country[1][0]).sort((a, b) => a[1] - b[1]);
        let currCountry = `${country[0]} -> `;

        for (let town of sortedTowns) {
            let currTown = `${town[0]} -> ${town[1]} `;

            currCountry += currTown;
        }

        console.log(currCountry)
    }
}

travelTime([

    'Bulgaria > Sofia > 25000',
    
    'Bulgaria > Sofia > 25000',
    
    'Kalimdor > Orgrimar > 25000',
    
    'Albania > Tirana > 25000',
    
    'Bulgaria > Varna > 25010',
    
    'Bulgaria > Lukovit > 10'
    
    ]);