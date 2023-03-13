function revealWords(wordsToReplaceWith, text) {
    let words = wordsToReplaceWith.split(', ');
    let textAsArr = text.split(' ');

    for (const currWord of textAsArr) {
        if (currWord.includes('*')) {
            for (const word of words) {
                if(currWord.length === word.length) {
                    textAsArr.splice(textAsArr.indexOf(currWord), 1, word);
                }
            }
        }     
    }

    console.log(textAsArr.join(' '));
}

revealWords('great, learning',

'softuni is ***** place for ******** new programming languages');