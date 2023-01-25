function condenseArrToNum(numbers) {
    while (numbers.length > 1) {
        let condensedArray = Array(numbers.length - 1);
        let condensedLength = numbers.length - 1;

        for (let i = 0; i < condensedLength; i++) {
            condensedArray[i] = numbers[i] + numbers[i + 1];
        }

        numbers = condensedArray;
    }
   
    console.log(numbers[0]);
}

condenseArrToNum([1]);