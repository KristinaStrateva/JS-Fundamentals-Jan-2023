function convertObjectToJSON(firstName, lastName, hairColor) {
    let object = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }

    let newJSON = JSON.stringify(object);

    console.log(newJSON);
}

convertObjectToJSON('George', 'Jones', 'Brown');