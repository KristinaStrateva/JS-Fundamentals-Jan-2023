function requiredReading(pagesAmount, pagesPerHour, daysAmount) {
    let totalTimeNeeded = pagesAmount / pagesPerHour;

    let timePerDay = totalTimeNeeded / daysAmount;

    console.log(timePerDay);
}

requiredReading(432, 15, 4);