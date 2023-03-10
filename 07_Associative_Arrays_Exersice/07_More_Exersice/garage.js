function garage(input) {
    let garages = {};

    for (const line of input) {
        let [currGarage, currCarInfo] = line.split(' - ');
        let currCarInfoAsArr = currCarInfo.split(', ');
        currGarage = Number(currGarage);

        if (!garages.hasOwnProperty(currGarage)) {
            garages[currGarage] = [];
        }

        let car = {};

        for (const currCar of currCarInfoAsArr) {
            let [typeInfo, valueInfo] = currCar.split(': ');

            car[typeInfo] = valueInfo;
        }

        (garages[currGarage]).push(car);
    }

    for (const garage in garages) {
        console.log(`Garage № ${garage}`);

        for (const carInfo of garages[garage]) {
            let result = '--- ';
            let currResult = [];

            for (const typeInfo in carInfo) {
                currResult.push(`${typeInfo} - ${carInfo[typeInfo]}`);
            }

            result += currResult.join(', ');

            console.log(result);
        }
    }
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);