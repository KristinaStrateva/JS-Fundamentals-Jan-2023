function reverseString(word) {

    let finalResult = ``;

    for (let i = word.length - 1; i >= 0; i--) {
        let result = word[i];

        finalResult += `${result}`;
    }

    console.log(finalResult);
}

reverseString("1234");