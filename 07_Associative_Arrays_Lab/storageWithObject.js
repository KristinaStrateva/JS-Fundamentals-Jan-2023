function creatingAStorage(input) {
    let storage = {};

    for (const line of input) {
        let [product, amount] = line.split(' ');

        

        if (storage[product]) {
            storage[product] += Number(amount);
        } else {
            storage[product] = Number(amount);
        }
    }

    for (const product in storage) {
        console.log(`${product} -> ${storage[product]}`);
    }
}

creatingAStorage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40']);