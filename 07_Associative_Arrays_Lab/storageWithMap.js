function creatingStorage(input) {
    let storage = new Map();

    for (const line of input) {
        let [product, amount] = line.split(' ');
        amount = Number(amount);

        if (!storage.has(product)) {
            storage.set(product, amount);
        } else {
            let newAmount = storage.get(product);
            newAmount += amount;

            storage.set(product, newAmount);
        }
    }

    for (const line of storage) {
        console.log(`${line[0]} -> ${line[1]}`);
    }
}

creatingStorage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40']);