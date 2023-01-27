    function signCheck(numOne, numTwo, numThree) {
        let totalNegative = 0;

        function isNegative(num) {
            return num < 0;
        }

        if (isNegative(numOne)) {
            totalNegative++;
        }

        if (isNegative(numTwo)) {
            totalNegative++;
        }

        if (isNegative(numThree)) {
            totalNegative++;
        }

        if (totalNegative % 2 === 0) {
            return 'Positive';
        } else {
            return 'Negative';
        }
    }

console.log(signCheck(5, -12, 15));