function searchForNumber(numbers, criteria) {
    let numsToTake = criteria[0];
    let numsToDelete = criteria[1];
    let numToSearchFor = criteria[2];
    let newArr = numbers.slice(0, numsToTake);
    let counter = 0;

    newArr.splice(0, numsToDelete);

    for (let currNum of newArr) {
        if (currNum === numToSearchFor) {
            counter++;
        }
    }

    console.log(`Number ${numToSearchFor} occurs ${counter} times.`);
}

searchForNumber([7, 1, 5, 8, 2, 7],

    [3, 1, 5]);