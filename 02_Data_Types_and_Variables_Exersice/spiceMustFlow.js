function spiceMustFlow(yield) {
    let dayCounter = 0;
    let yieldCollected = 0;

    if (yield >= 100) {
        while (yield >= 100) {
            dayCounter++;
    
            yieldCollected += yield;
    
            yield -= 10;
    
            yieldCollected -= 26;
        }
    
        yieldCollected -= 26;    
    }
    
    console.log(dayCounter);
    console.log(yieldCollected);
}

spiceMustFlow(90);