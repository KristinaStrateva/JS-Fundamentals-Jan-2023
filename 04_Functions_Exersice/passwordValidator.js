function passwordValidator(password) {
    let passwordLength = password.length;
    let digitCounter = 0;
    let isSymbol = false;

    for (let i = 0; i < passwordLength; i++) {
        let currChar = password[i];
        let currCharAsNumber = currChar.charCodeAt();

        if (currCharAsNumber >= 48 && currCharAsNumber <= 57) {
            digitCounter++;
        }

        if (!(currCharAsNumber >= 48 && currCharAsNumber <= 57) && !(currCharAsNumber >= 65 && currCharAsNumber <= 90) && !(currCharAsNumber >= 97 && currCharAsNumber <= 122)) {
            isSymbol = true;
        }
    }

    if ((passwordLength >= 6 && passwordLength <= 10) && !isSymbol && digitCounter >= 2) {
        console.log('Password is valid');
    }

    if (!(passwordLength >= 6 && passwordLength <= 10)) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (isSymbol) {
        console.log('Password must consist only of letters and digits');
    }

    if (digitCounter < 2) {
        console.log('Password must have at least 2 digits');
    }
}

passwordValidator('Pa$s$s');