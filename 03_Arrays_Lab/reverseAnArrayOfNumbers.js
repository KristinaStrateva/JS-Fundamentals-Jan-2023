function reverseAnArrayOfNumbers(count, arrayOfNumbers) {

    let newArray = [];
    

    for (let i = 0; i < count; i++) {

        newArray[count - 1 - i] = arrayOfNumbers[i];
    }

    let result = newArray.join(' ');
    console.log(result);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);