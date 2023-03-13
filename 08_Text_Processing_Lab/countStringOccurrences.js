function countStringOccurrences(text, word) {
    let textAsArr = text.split(' ');
    let counter = 0;

    for (const currWord of textAsArr) {
        if (currWord === word) {
            counter++;
        }
    }

    console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence',

'is');