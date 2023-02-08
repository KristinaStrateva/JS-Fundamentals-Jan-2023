function city(properties) {
    for (const key of Object.keys(properties)) {
        
        console.log(`${key} -> ${properties[key]}`);
    }
}

city({name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000"});