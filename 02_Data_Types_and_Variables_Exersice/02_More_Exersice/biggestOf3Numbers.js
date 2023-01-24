function biggestNumber(num1, num2, num3) {
    let max = Number.MIN_SAFE_INTEGER;

    if (num1 > max) {
        max = num1;
    }

    if (num2 > max) {
        max = num2;
    }

    if (num3 > max) {
        max = num3;
    }

    console.log(max);
}

biggestNumber(130, 99, 5);