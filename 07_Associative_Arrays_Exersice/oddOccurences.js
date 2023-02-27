function oddAmountOfOccurences(elements) {
    let elementsAsArr = elements.toLowerCase().split(' ');
    let elementsAsObj = {};

    for (const element of elementsAsArr) {
        if (!elementsAsObj[element]) {
            elementsAsObj[element] = 0;
        }

        elementsAsObj[element]++;
    }

    let sortedElements = Object.entries(elementsAsObj).sort((a, b) => b[1] - a[1]);

    let result = '';

    sortedElements.forEach(element => {
        if (Number(element[1]) % 2 !== 0) {
            result += `${element[0]} `;
        }
    });

    console.log(result);
}

oddAmountOfOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');