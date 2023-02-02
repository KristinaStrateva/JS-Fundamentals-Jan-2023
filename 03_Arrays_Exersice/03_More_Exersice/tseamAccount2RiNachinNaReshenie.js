function tseamAccount(input) {
    let petersAccount = input.shift().split(' ');
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'Play!') {
        let commandAsArr = command.split(' ');
        let currCommand = commandAsArr[0];
        let currGame = commandAsArr[1];

        if (currCommand === 'Install') {
            if (!(petersAccount.includes(currGame))) {
                petersAccount.push(currGame);
            }
        } else if (currCommand === 'Uninstall') {
            if (petersAccount.includes(currGame)) {
                petersAccount = petersAccount.filter(x => x !== currGame);
            }
        } else if (currCommand === 'Update') {
            if (petersAccount.includes(currGame)) {
                petersAccount = petersAccount.filter(x => x !== currGame);
                petersAccount.push(currGame);
            }
        } else if (currCommand === 'Expansion') {
            currGame = currGame.split('-');
            let expansionedGame = currGame[0];
            let expansion = currGame[1];
            currGame = `${expansionedGame}:${expansion}`;

            if (petersAccount.includes(expansionedGame)) {
                let gameIndex = petersAccount.indexOf(expansionedGame);
                petersAccount.splice(gameIndex + 1, 0, currGame);
            }
        }

        command = input[index];
        index++;
    }

    console.log(petersAccount.join(' '));
}

tseamAccount([
    'CS WoW Diablo',

    'Uninstall XCOM',

    'Update PeshoGame',

    'Update WoW',

    'Expansion Civ-V',

    'Play!',
]);