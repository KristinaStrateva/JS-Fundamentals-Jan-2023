function wordOccurences(input) {
    let words = {};

    for (const word of input) {
        if (!words[word]) {
            words[word] = 1;
        } else {
            words[word]++;
        }
    }

    let wordsEntries = Object.entries(words);
    let sortedWords = wordsEntries.sort((a, b) => b[1] - a[1]);

    for (const word of sortedWords) {
        console.log(`${word[0]} -> ${word[1]} times`);
    }
}

wordOccurences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"]);