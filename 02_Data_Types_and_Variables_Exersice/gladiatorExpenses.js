function gladiatorExpenses(lostFightsAmount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    
    let brokenHelmetCounter = 0;
    let brokenSwordCounter = 0;
    let brokenShieldCounter = 0;
    let brokenArmorCounter = 0;

    for (let i = 1; i <= lostFightsAmount; i++) {
        let isBrokenHelmet = false;
        let isBrokenSword = false;

        if (i % 2 === 0) {
            brokenHelmetCounter++;
            isBrokenHelmet = true;
        }

        if (i % 3 === 0) {
            brokenSwordCounter++;
            isBrokenSword = true;
        }

        if (isBrokenHelmet && isBrokenSword) {
            brokenShieldCounter++;
        }

        if (i % 12 === 0) {
            brokenArmorCounter++;
        }
    }

    let totalHelmetPrice = brokenHelmetCounter * helmetPrice;
    let totalSwordPrice = brokenSwordCounter * swordPrice;
    let totalShieldPrice = brokenShieldCounter * shieldPrice;
    let totalArmorPrice = brokenArmorCounter * armorPrice;

    let expenses = totalHelmetPrice + totalSwordPrice + totalShieldPrice + totalArmorPrice;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.5, 21.5, 40, 200);