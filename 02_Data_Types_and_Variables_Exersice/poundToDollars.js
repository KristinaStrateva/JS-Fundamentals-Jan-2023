function poundsToDollars(pounds) {

    const poundValue = 1.31;
    let exchangedPounds = pounds * poundValue;

    console.log(exchangedPounds.toFixed(3));
}

poundsToDollars(80);