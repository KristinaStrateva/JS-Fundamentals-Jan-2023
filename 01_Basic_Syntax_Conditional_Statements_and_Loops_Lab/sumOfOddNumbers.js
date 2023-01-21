function sumOfOddNumbers(n) {

    let counter = 0;
    let sum = 0;

    for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i++) {

        if (i % 2 !== 0) {
            counter++;

            if (counter > n) {
                break;
            }

            console.log(i);

            sum += i;

        } else {
            continue;
        }
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3);