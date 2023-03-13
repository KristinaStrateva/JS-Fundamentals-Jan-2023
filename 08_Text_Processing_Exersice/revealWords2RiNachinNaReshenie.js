function revealWords(words, text) {
    let wordsArr = words.split(', ');

    for (const word of wordsArr) {
        let match = '*'.repeat(word.length);

        text = text.replace(match, word);
    }

    console.log(text);
}

revealWords('learning, great',

'softuni is ***** place for ******** new programming languages');