function primeNumberChecker(number) {
    let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
        }
    }

    console.log(isPrime);
}

primeNumberChecker(3);