function sortingCatalogue(input) {
    let storeProductsAsArr = [];

    for (let product of input) {
        let [name, price] = product.split(' : ');
        price = Number(price);

        storeProductsAsArr.push({name: name, price: price});
    }

    let sortedProducts = storeProductsAsArr.sort((a, b) => a.name.localeCompare(b.name));

    for (let i = 0; i < sortedProducts.length; i++) {
        let product = sortedProducts[i];
        let prevProduct = sortedProducts[i - 1];

        if (i === 0) {
            console.log(product.name[0]);
            console.log(`${product.name}: ${product.price}`)
        } else {
            if (product.name[0] === prevProduct.name[0]) {
                console.log(`${product.name}: ${product.price}`);
            } else {
                console.log(product.name[0]);
                console.log(`${product.name}: ${product.price}`);
            }
        }
    }
}

sortingCatalogue([

    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10',

]);