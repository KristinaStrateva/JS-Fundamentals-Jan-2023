function charsInRange(rangeStart, rangeEnd) {
    let rangeStartAsNum = rangeStart.charCodeAt();
    let rangeEndAsNum = rangeEnd.charCodeAt();
    let min = Math.min(rangeStartAsNum, rangeEndAsNum);
    let max = Math.max(rangeStartAsNum, rangeEndAsNum);
    let resultArr = [];

    for (let i = min + 1; i < max; i++) {
        let currChar = String.fromCharCode(i);
        resultArr.push(currChar);
    }

    let finalResult = resultArr.join(' ');
    return finalResult;
}

console.log(charsInRange('#', ':'));