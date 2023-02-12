function printStoreProducts(currStock, orderedProducts) {
    const currStockLength = currStock.length;
    const currStockAsObject = {};

    for (let i = 0; i < currStockLength; i += 2) {
        currStockAsObject[currStock[i]] = Number(currStock[i + 1]);
    }
    
    const orderedProductsLength = orderedProducts.length;

    for (let i = 0; i < orderedProductsLength; i += 2) {
        let currProduct = orderedProducts[i];

        if (!currStockAsObject.hasOwnProperty(currProduct)) {
            currStockAsObject[currProduct] = 0;
        }
    
        currStockAsObject[currProduct] += Number(orderedProducts[i + 1]);
    }

    for (const key in currStockAsObject) {
        console.log(`${key} -> ${currStockAsObject[key]}`);
    }
}

printStoreProducts(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],

    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);