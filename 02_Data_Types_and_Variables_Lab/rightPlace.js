function rightPlace(string1, char, string2) {

    let missedCharPlace = 0;
   
    for (let i = 0; i < string1.length; i++) {
        let currChar = string1[i];

        if (currChar === "_") {
            missedCharPlace = i;

            break;
        }
    }

    let charToCheck = string2[missedCharPlace];

    if (charToCheck === char) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

rightPlace('Str_ng', 'I', 'String');