function OrderCalculation(product, quantity) {
    const coffeePrice = 1.5;
    const waterPrice = 1;
    const cokePrice = 1.4;
    const snacksPrice = 2;

    let orderPrice = 0;

    switch (product) {
        case 'coffee': orderPrice = quantity * coffeePrice; break;
        case 'water': orderPrice = quantity * waterPrice; break;
        case 'coke': orderPrice = quantity * cokePrice; break;
        case 'snacks': orderPrice = quantity * snacksPrice; break;
    }

    return orderPrice.toFixed(2);
}

console.log(OrderCalculation('coffee', 2));