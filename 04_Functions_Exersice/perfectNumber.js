function perfectNumber(number) {
    let divisorsSum = 0;

    for (let divisor = 1; divisor <= number / 2; divisor++) {

        if (number % divisor === 0) {
            divisorsSum += divisor;
        }
    }

    if (divisorsSum === number) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

perfectNumber(6);