function constructingABuilding(initialBuildHeight) {
    let currBuildHeight = initialBuildHeight.slice(0);
    let concreteAmountForEachDay = [];
    let counter = 0;

    while (currBuildHeight.length !== 0) {
        let dailyConcreteAmount = 0;

        for (let i = 0; i < currBuildHeight.length; i++) {
            let currCrewWallHeight = currBuildHeight[i];

            if (currCrewWallHeight === 30) {
                currBuildHeight.splice(i, 1);
                i--;
                continue;
            }

            currCrewWallHeight += 1;
            
            if (currCrewWallHeight < 30) {
                currBuildHeight[i] = currCrewWallHeight;
            } else {
                currBuildHeight.splice(i, 1);
                i--;
            }

            dailyConcreteAmount += 195;
        }

        concreteAmountForEachDay.push(dailyConcreteAmount);
        counter++;
    }

    let reducer = (a, b) => a + b;
    let totalCost = concreteAmountForEachDay.reduce(reducer, 0) * 1900;

    console.log(concreteAmountForEachDay.join(', '));
    console.log(`${totalCost} pesos`);
}

constructingABuilding([30, 29, 28]);