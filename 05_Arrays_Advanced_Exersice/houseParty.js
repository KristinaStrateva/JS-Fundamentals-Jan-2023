function trackingList(trackingGuests) {
    let trackingGuestsLength = trackingGuests.length;
    let officialList = [];

    for (let i = 0; i < trackingGuestsLength; i++) {
        let currCommand = trackingGuests[i];
        let guestName = currCommand.split(' ')[0];
        
        if (i === 0 || !officialList.includes(guestName)) {
            if (!currCommand.includes('not')) {
                officialList.push(guestName);
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        } else {
            if (!currCommand.includes('not')) {
                console.log(`${guestName} is already in the list!`);
            } else {
                officialList = officialList.filter(nameToKeep => nameToKeep !== guestName);
            }
        }
    }

    console.log(officialList.join('\n'));
}

trackingList([
    'Allie is going!',

    'George is going!',

    'John is not going!',

    'George is not going!',
]);