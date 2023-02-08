function convertJSONToObject(stringInJSON) {
    let newObject = JSON.parse(stringInJSON);

    for (const key of Object.keys(newObject)) {
        console.log(`${key}: ${newObject[key]}`);
    }
}

convertJSONToObject('{"name": "George", "age": 40, "town": "Sofia"}');