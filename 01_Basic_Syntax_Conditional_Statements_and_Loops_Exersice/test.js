function solve(base, increment) {
 
    let row = 0;
    let perimeter = 0;
 
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
 
    for (let i = base; i >= 1; i -= 2) {
        row++;
        let currentStone = 0;
        let currentMarble = 0;
        let currentLapisLazuli = 0;
 
        if (i === 1 || i === 2) {
            gold = i * i * increment;
            break;
        }
 
        if (row % 5 == 0) {
            perimeter = 4 * i - 4;
            currentLapisLazuli += perimeter * increment;
            currentStone += (i * i - perimeter) * increment;
            lapisLazuli += currentLapisLazuli;
            stone += currentStone;
        } else {
            perimeter = 4 * i - 4;
            currentMarble += perimeter * increment;
            currentStone += (i * i - perimeter) * increment;
            marble += currentMarble;
            stone += currentStone;
        }
 
    }
    console.log(`Stone required: ${Math.ceil(stone)}
Marble required: ${Math.ceil(marble)}
Lapis Lazuli required: ${Math.ceil(lapisLazuli)}
Gold required: ${Math.ceil(gold)}
Final pyramid height: ${Math.floor(row * increment)}`);
 
}

solve(23, 0.5);