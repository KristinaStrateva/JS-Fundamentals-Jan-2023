function listOfProducts(products) {
    let productList = products.sort();
    let productListLength = productList.length;
    let newArr = [];

    for (let i = 1; i <= productListLength; i++) {
        newArr.push(`${i}.${productList[i - 1]}`);
    }

    let result = newArr.join('\n');
    return result;
}

console.log(listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']));