function reverseAnArrayOfNumbers(count, arrayOfNumbers) {

    let newArray = [];
    
    for (let i = count - 1; i >= 0; i--) {

        newArray.push(arrayOfNumbers[i]);
    }

    let result = '';

    for (let i = 0; i < newArray.length; i++) {
        result += `${newArray[i]} `;
    }
    
    console.log(result);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);