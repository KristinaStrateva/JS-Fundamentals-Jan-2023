function triangleOfNumbers(n) {
    
    for (let i = 1; i <= n; i++) {
        let totalResult = ``;

        for (let j = 1; j <= i; j++) {
            let result = `${i}`;

            if (j === i) {
                totalResult += `${result}`;
            
                break;
            }

            totalResult += `${result} `;
        }

        console.log(totalResult);
    }
}

triangleOfNumbers(5);