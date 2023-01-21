function pyramidOfDjoser(base, increment) {
    
    let counter = 0;
    let totalStoneAmount = 0;
    let totalMarbleAmount = 0;
    let totalLapisLazuliAmount = 0;
    let totalGoldAmount = 0;
    let totalHight = 0;

    for (let i = base; i > 0; i -= 2) {
        counter++;
        
        let width = i;
        let length = i;

        let totalBlocksAmount = width * length * increment;

        let currStoneAmount = (width - 2) * (length - 2) * increment;
        let currMarbleAmount = 0;
        let currLapisLazuliAmount = 0;

        totalHight += increment;

        if (i === 1 || i === 2) {
            totalGoldAmount = width * length * increment;

            break;
        }

        if (counter % 5 === 0) {
            currLapisLazuliAmount = totalBlocksAmount - currStoneAmount;

            totalLapisLazuliAmount += currLapisLazuliAmount;

        } else {
            currMarbleAmount = totalBlocksAmount - currStoneAmount;

            totalMarbleAmount += currMarbleAmount;
        }

        totalStoneAmount += currStoneAmount;
    }

    console.log(`Stone required: ${Math.ceil(totalStoneAmount)}`);
    console.log(`Marble required: ${Math.ceil(totalMarbleAmount)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuliAmount)}`);
    console.log(`Gold required: ${Math.ceil(totalGoldAmount)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHight)}`);
}

pyramidOfDjoser(23, 0.5);