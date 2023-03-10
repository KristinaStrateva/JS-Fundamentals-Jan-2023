function armies(input) {
    let leaders = {};
    
    for (let line of input) {
        
        if (line.includes('arrives')) {
            let currLeader = line.split(' arrives')[0];

            leaders[currLeader] = [{}, 0];

        } else if (line.includes(':')) {
            let [currLeader, armyInfo] = line.split(': ');

            if (leaders[currLeader]) {
                let [armyName, armyCount] = armyInfo.split(', ');

                leaders[currLeader][0][armyName] = Number(armyCount);
                leaders[currLeader][1] += Number(armyCount);
            }

        } else if (line.includes('+')) {
            let [armyName, armyCount] = line.split(' + ');

            for (const leader in leaders) {
                if (leaders[leader][0][armyName]) {
                    leaders[leader][0][armyName] += Number(armyCount);
                    leaders[leader][1] += Number(armyCount);
                }
            }

        } else if (line.includes('defeated')) {
            let currLeader = line.split(' defeated')[0];

            if (leaders[currLeader]) {
                delete leaders[currLeader];
            }
        }
    }

    let sortedLeaders = Object.entries(leaders).sort((a, b) => b[1][1] - a[1][1]);

    for (const leader of sortedLeaders) {
        console.log(`${leader[0]}: ${leader[1][1]}`);

        let sortedArmies = Object.entries(leader[1][0]).sort((a, b) => b[1] - a[1]);

        for (const army of sortedArmies) {
            console.log(`>>> ${army[0]} - ${army[1]}`);
        }
    }
}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205',
]);