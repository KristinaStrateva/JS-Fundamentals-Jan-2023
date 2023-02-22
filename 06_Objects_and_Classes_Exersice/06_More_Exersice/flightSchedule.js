function flightSchedule(input) {
    let flightInfo = input[0];
    let flightInfoAsArrOfObj = [];

    for (let i = 0; i < flightInfo.length; i++) {
        let sector = flightInfo[i].split(' ')[0];
        let destination = flightInfo[i]
                            .split(' ')
                            .slice(1)
                            .join(' ');

        let status = 'Ready to fly';

        flightInfoAsArrOfObj.push({ sector: sector, destination: destination, status: status });
    }

    let newlyChangedStatuses = input[1];

    for (let i = 0; i < newlyChangedStatuses.length; i++) {
        let [changedSector, status] = newlyChangedStatuses[i].split(' ');

        for (let j = 0; j < flightInfoAsArrOfObj.length; j++) {
            if (changedSector === flightInfoAsArrOfObj[j].sector) {
                flightInfoAsArrOfObj[j].status = status;
            }
        }
    }

    let statusToCheck = input[2][0];

    if (statusToCheck === 'Ready to fly') {
        for (let flight of flightInfoAsArrOfObj) {
            if (flight.status === 'Ready to fly') {
                console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
            }
        }
    } else {
        for (let flight of flightInfoAsArrOfObj) {
            if (flight.status === 'Cancelled') {
                console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
            }
        }
    }  
}

flightSchedule([
    [
        'WN269 Delaware',

        'FL2269 Oregon',

        'WN498 Las Vegas',

        'WN3145 Ohio',

        'WN612 Alabama',

        'WN4010 New York',

        'WN1173 California',

        'DL2120 Texas',

        'KL5744 Illinois',

        'WN678 Pennsylvania'],

    [
        'DL2120 Cancelled',

        'WN612 Cancelled',

        'WN1173 Cancelled',

        'SK430 Cancelled'],

    ['Cancelled']
]);