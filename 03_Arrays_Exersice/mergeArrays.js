function mergeArrays(string1, string2) {
    let newArray = [];
    let string1Length = string1.length;

    for (let i = 0; i < string1Length; i++) {
        if (i % 2 === 0) {
            let evenSum = Number(string1[i]) + Number(string2[i]);
            newArray[i] = evenSum;
        } else {
            let oddConcatenation = string1[i] + string2[i];
            newArray[i] = oddConcatenation;
        }
    }

    console.log(newArray.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11']);