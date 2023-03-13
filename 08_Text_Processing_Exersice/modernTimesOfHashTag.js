function printSpecialWords(string) {
    let stringAsArr = string.split(' ');

    for (const word of stringAsArr) {

        if (word.includes('#') && word.length > 1) {
            let isValid = true;
            let wordToCheck = word.substring(1);

            for (const letter of wordToCheck) {
                if (!((letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) || (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122))) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                console.log(wordToCheck);
            }
        }
    }
}

printSpecialWords('The symbol # is known #variously in English-speaking #regions as the #number sign');