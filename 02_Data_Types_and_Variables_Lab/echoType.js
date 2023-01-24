function echoType(word) {

    if (typeof word === "string" || typeof word === "number") {
        console.log(typeof word);
        console.log(word);
    } else {
        console.log(typeof word);
        console.log("Parameter is not suitable for printing");
    }
}

echoType(null);