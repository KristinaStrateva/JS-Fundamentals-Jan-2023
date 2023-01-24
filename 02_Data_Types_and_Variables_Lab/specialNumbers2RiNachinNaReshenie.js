function specialNumbers(n) {
    
    for (let i = 1; i <= n; i++) {
        let currNumStr = i.toString();
        let currNumStrLength = currNumStr.length;
        let sum = 0;

        for (let j = 0; j < currNumStrLength; j++) {
            let currNum = Number(currNumStr[j]);

            sum += currNum;
        }

        console.log((sum === 5 || sum === 7 || sum === 11) ? `${i} -> True` : `${i} -> False`);
    }
}