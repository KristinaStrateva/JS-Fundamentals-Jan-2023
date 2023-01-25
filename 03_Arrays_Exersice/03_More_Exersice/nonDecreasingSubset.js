function nonDecreasingSubset(numbers) {
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < numbers.length; i++) {
        let currNum = numbers[i];

        if (currNum >= max) {
            max = currNum;
        } else {
            numbers.splice(i, 1);
            i--;
        }
    }

    console.log(numbers.join(' '));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);