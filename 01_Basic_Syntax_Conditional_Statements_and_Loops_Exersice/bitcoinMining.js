function bitcoinMining(input) {

    let dayCounter = 0;
    let dayOfFirstBitcoin = 0;
    let totalGoldPrice = 0;
    let firstBitcoin = 0;
    let bitcoinAmount = 0;

    for (let i = 0; i < input.length; i++) {
        let currMinedGold = Number(input[i]);

        dayCounter++;

        if (dayCounter % 3 === 0) {
            currMinedGold *= 0.7;
        }

        let currGoldPrice = currMinedGold * 67.51;
        totalGoldPrice += currGoldPrice;

        if (totalGoldPrice >= 11949.16) {
            firstBitcoin++;

            let currBitcoinAmount = Math.floor(totalGoldPrice / 11949.16);
            bitcoinAmount += currBitcoinAmount;

            totalGoldPrice -= currBitcoinAmount * 11949.16;

            if (firstBitcoin === 1) {
                dayOfFirstBitcoin = dayCounter;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinAmount}`);

    if (bitcoinAmount > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }

    console.log(`Left money: ${totalGoldPrice.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);