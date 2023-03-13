function findingWord(word, text) {
    let textArr = text.split(' ');
    let isAppear = false;

    for (const currWord of textArr) {
        let wordToCheck = currWord.toLowerCase();

        if (wordToCheck === word) {
            isAppear = true;
            break;
        }
    }

    if (isAppear) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

findingWord('javascript',

'JavaScript is the best programming language');