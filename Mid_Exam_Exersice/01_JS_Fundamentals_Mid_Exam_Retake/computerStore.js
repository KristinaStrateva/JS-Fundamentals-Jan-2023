function calculatingTheComputerPrice(input) {
    let index = 0;
    let currPrice = input[index];
    index++;
    let totalPriceWithoutTax = 0;

    while (currPrice !== 'special' && currPrice !== 'regular') {
        currPrice = Number(currPrice);

        if (currPrice < 0) {
            console.log('Invalid price!');

            currPrice = input[index];
            index++;
            continue;
        }

        totalPriceWithoutTax += currPrice;

        currPrice = input[index];
        index++;
    }

    let taxAmount = totalPriceWithoutTax * 0.2;
    let totalPriceWithTax = totalPriceWithoutTax + taxAmount;

    if (currPrice === 'special') {
        totalPriceWithTax *= 0.9;
    }

    if (totalPriceWithTax === 0) {
        console.log('Invalid order!');
    } else {
        console.log('Congratulations you\'ve just bought a new computer!');
        console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxAmount.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPriceWithTax.toFixed(2)}$`);
    }
}

calculatingTheComputerPrice([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])
    ;    