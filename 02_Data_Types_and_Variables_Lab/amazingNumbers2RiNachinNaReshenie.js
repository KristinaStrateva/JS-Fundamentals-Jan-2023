function amazingNumbers(number) {
    let numberStr = String(number);
    
    let sum = 0;
    let isAmazingNumber = false;

    for (let i = 0; i < numberStr.length; i++) {
        let currChar1 = Number(numberStr[i]);

        sum += currChar1;
    }

    let sumStr = String(sum);

    for (let j = 0; j < sumStr.length; j++) {
        let currChar2 = Number(sumStr[j]);

        if (currChar2 === 9) {
            isAmazingNumber = true;

            break;
        }
    }

    let finalResult = isAmazingNumber
    ? console.log(`${number} Amazing? True`)
    : console.log(`${number} Amazing? False`);
}

amazingNumbers(999);