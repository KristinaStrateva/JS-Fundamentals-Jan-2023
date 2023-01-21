function printAndSum(beginning, end) {
    let totalResult = ``;
    let sum = 0;

    for (let i = beginning; i <= end; i++) {
        let result = `${i}`;

        totalResult += `${result} `;

        sum += i;
    }

    console.log(totalResult.trim());
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);