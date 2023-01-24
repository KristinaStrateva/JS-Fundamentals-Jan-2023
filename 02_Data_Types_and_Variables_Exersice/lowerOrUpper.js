function lowerOrUpper(char) {
    if (char >= 'A' && char <= 'Z') {
        console.log('upper-case');
    } else if (char >= 'a' && char <= 'z') {
        console.log(`lower-case`);
    }
}

lowerOrUpper('L');