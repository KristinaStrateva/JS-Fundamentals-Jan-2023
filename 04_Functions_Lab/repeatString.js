function repeatString(string, count) {
    let result = ``;

    for (let i = 1; i <= count; i++) {
        result += `${string}`;
    }

    return result;
}

console.log(repeatString('abc', 3));