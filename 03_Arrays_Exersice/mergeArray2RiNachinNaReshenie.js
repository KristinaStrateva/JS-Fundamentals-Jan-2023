function mergeArray(input1, input2) {
    let newArr = [];
    let input1Length = input1.length;

    for (let i = 0; i < input1Length; i++) {
        if (i % 2 === 0) {
            newArr.push(Number(input1[i]) + Number(input2[i]));
        } else {
            newArr.push(input1[i] + input2[i]);
        }
    }

    console.log(newArr.join(' - '));
}

mergeArray(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11']);