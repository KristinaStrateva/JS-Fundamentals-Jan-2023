function findingAndSortingTopFiveNums(numbers) {
    let numbersAsArr = numbers.split(' ').map(Number);
    let numbersAsArrLength = numbersAsArr.length;
    let sortedArr = [];
    let sum = 0;
    let counter = 0;

    for (let num of numbersAsArr) {
        sum += num;
    }

    let averageValue = sum / numbersAsArrLength;

    for (let num of numbersAsArr) {
        if (num > averageValue) {
            counter++;
            sortedArr.push(num);
        }
    }

    sortedArr.sort((a, b) => b - a);
    sortedArr.length = 5;

    if (counter > 0) {
        return sortedArr.join(' ');
    } else {
        return 'No';
    }
}

console.log(findingAndSortingTopFiveNums('-1 -2 -3 -4 -5 -6'));