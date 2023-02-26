function wordsOccurences(input) {
    let wordsToTrack = input.shift().split(' ');

    let wordsToTrackAsObj = {};

    for (const word of wordsToTrack) {
        wordsToTrackAsObj[word] = 0;
    }

    for (const word of input) {
        if (wordsToTrackAsObj.hasOwnProperty(word)) {
            wordsToTrackAsObj[word]++;
        }
    }

    let sortedWords = Object.entries(wordsToTrackAsObj).sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(kvp => {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    });
}

wordsOccurences([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ]);