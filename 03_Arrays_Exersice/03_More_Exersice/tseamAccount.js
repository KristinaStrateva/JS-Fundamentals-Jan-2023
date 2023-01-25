function tseamAccount(input) {
    let index = 0;
    let peterAccount = input[index];
    index++;
    let command = input[index];
    index++;
    let peterAccountLength = peterAccount.length;
    let gameCreator = ``;
    let gameArr = [];

    for (let i = 0; i < peterAccountLength; i++) {
        let currChar = peterAccount[i];

        if (i === peterAccountLength - 1) {
            gameCreator += `${currChar}`;
            gameArr.push(gameCreator);
            break;
        } else if (currChar !== ' ') {
            gameCreator += `${currChar}`;
        } else {
            gameArr.push(gameCreator);
            gameCreator = ``;
            continue;
        }
    }

    while (command !== 'Play!') {
        let currGame = '';

        if (command.includes('Install')) {
            currGame = command.slice(8);

            if (!(gameArr.includes(currGame))) {
                gameArr.push(currGame);
            }

        } else if (command.includes('Uninstall')) {
            currGame = command.slice(10);

            if (gameArr.includes(currGame)) {
                let gameIndex = gameArr.indexOf(currGame);
                gameArr.splice(gameIndex, 1);
            }

        } else if (command.includes('Update')) {
            currGame = command.slice(7);

            if (gameArr.includes(currGame)) {
                let gameIndex = gameArr.indexOf(currGame);
                gameArr.splice(gameIndex, 1);
                gameArr.push(currGame);
            }

        } else if (command.includes('Expansion')) {
            currGame = command.slice(10);

            let currGameLength = currGame.length;
            let expansionArr = [];
            let result = ``;

            for (let i = 0; i < currGameLength; i++) {
                let currChar = currGame[i];

                if (i === currGameLength - 1) {
                    result += `${currChar}`;
                    expansionArr.push(result);
                    break;
                } else if (currChar === '-') {
                    expansionArr.push(result);
                    result = ``;
                    continue;
                } else {
                    result += `${currChar}`;
                }
            }

            let expansionGame = expansionArr[0];
            let expansion = expansionArr[1];
            currGame = `${expansionGame}:${expansion}`;

            if (gameArr.includes(expansionGame)) {
                let gameIndex = gameArr.indexOf(expansionGame);
                gameArr.splice(gameIndex + 1, 0, currGame);
            }
        }

        command = input[index];
        index++;
    }

    console.log(gameArr.join(' '));
}

tseamAccount(['CS WoW Diablo',

'Uninstall XCOM',

'Update PeshoGame',

'Update WoW',

'Expansion Civ-V',

'Play!']);