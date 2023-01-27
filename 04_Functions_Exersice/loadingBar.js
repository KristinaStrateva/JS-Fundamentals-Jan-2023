function loadingBar(number) {
    let loadedPercentageSymbol = '%';
    let leftToLoadSymbol = '.';

    let loadedPercentageSymbolAmount = number / 10;
    let leftToLoadSymbolAmount = 10 - loadedPercentageSymbolAmount;

    let totalLoadedSymbols = loadedPercentageSymbol.repeat(loadedPercentageSymbolAmount);
    let totalLeftToLoadSymbols = leftToLoadSymbol.repeat(leftToLoadSymbolAmount);

    let finalResult = `${totalLoadedSymbols}${totalLeftToLoadSymbols}`;

    if (number === 100) {
        console.log('100% Complete!');
        console.log(`[${finalResult}]`);
    } else {
        console.log(`${number}% [${finalResult}]`);
        console.log('Still loading...');
    }
}

loadingBar(100);