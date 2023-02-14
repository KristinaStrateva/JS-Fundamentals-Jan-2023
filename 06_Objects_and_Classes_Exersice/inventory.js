function registerAndSortHeroes(input) {
    let heroInfo = [];

    input.forEach(line => {
        let [heroName, heroLevel, heroItems] = line.split(' / ');
        heroLevel = Number(heroLevel);
        
        heroInfo.push({heroName, heroLevel, heroItems});
    });

    let sortedByLevel = heroInfo.sort((a, b) => a.heroLevel - b.heroLevel);

    for (const hero of sortedByLevel) {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.heroItems}`);
    }
}

registerAndSortHeroes([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

]);