function substring(string, startIndex, count) {
    let endIndex = startIndex + count;
    let result = string.substring(startIndex, endIndex);

    console.log(result);    
}

substring('ASentence', 1, 8);