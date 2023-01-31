function distinctArray(numbers) {
    let newArr = [];
    newArr[0] = numbers[0];

    for (let num of numbers) {
        if (newArr.includes(num)) {
            continue;
        } else {
            newArr.push(num);
        }
    }

    console.log(newArr.join(' '));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);