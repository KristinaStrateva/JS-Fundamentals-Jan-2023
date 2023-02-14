function insertTermsAndDefinition(input) {
    let dictionary = [];

    input.forEach(line => {
        let convertedToObject = JSON.parse(line);
        let term = Object.getOwnPropertyNames(convertedToObject).join('');
        let definition = Object.values(convertedToObject).join('');

        let termToCheck = dictionary.find(el => el.term === term);

        if (termToCheck) {
            termToCheck.definition = definition;
        } else {
            dictionary.push({term: term, definition: definition});
        }
    });

    let sortedAlphabetically = dictionary.sort((a, b) => Object.values(a)[0].localeCompare(Object.values(b)[0]));


    sortedAlphabetically.forEach(line => {
        console.log(`Term: ${line.term} => Definition: ${line.definition}`);
    });
}

insertTermsAndDefinition([

    '{"Coffee":"A hot drink made from the roasted and ground seeds(coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'

]);