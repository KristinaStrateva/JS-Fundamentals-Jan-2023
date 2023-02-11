function solve(input) {
    let arr = input[0];
    let indexToDelete = input[1];
    let usedIndex = indexToDelete; // Making this variable so I can keep the initial value of the indexToDelete
    let elOneToAdd = input[2];
    let elTwoToAdd = input[3];
    let elThreeToAdd = input[4];
    let elAsArr = [elOneToAdd, elTwoToAdd, elThreeToAdd]; // Making the elements that I have to add as array, so I can loop them
    let newArr = [];

    for (let i = 0; i < indexToDelete; i++) {
        newArr[i] = arr[i];
    }

    for (let i = 0; i < 3; i++) {
        newArr[usedIndex] = elAsArr[i];
        usedIndex++;
    }

    let restArr = [];
    let index2 = 0;

    for (let i = indexToDelete + 1; i < arr.length; i++) {
        restArr[index2] = arr[i];
        index2++;
    }

    let index = 0;
    let newArrLength = newArr.length;
    let restArrLength = restArr.length;

    for (let i = newArr.length; i < newArrLength + restArrLength; i++) {
        newArr[i] = restArr[index];
        index++;
    }

    console.log(newArr.join(' '));
}

solve([[1, 2, 3, 4, 5, 8], 1, 6, 7, 9]);