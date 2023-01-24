function echoType(word) {
    console.log(typeof word);

    let result = typeof word === "string" || typeof word === "number"
    ? console.log(word)
    : console.log("Parameter is not suitable for printing");
}

echoType(null);