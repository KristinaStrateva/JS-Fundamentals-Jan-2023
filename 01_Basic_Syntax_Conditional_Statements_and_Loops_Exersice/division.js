function division(number) {
    
    if (number % 2 === 0 || number % 3 === 0 || number % 6 === 0 || number % 7 === 0 || number % 10 === 0) {
        let divNum = 0;

        if (number % 2 === 0) {
            divNum = 2;
        }

        if (number % 3 === 0) {
            divNum = 3;
        }

        if (number % 6 === 0) {
            divNum = 6;
        }

        if (number % 7 === 0) {
            divNum = 7;
        }

        if (number % 10 === 0) {
            divNum = 10;
        }

        console.log(`The number is divisible by ${divNum}`);
        
    } else {
        console.log("Not divisible");
    }
}

division(30);