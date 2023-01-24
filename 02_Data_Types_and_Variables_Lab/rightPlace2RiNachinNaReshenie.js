function rightPlace(str1, char, str2) {
    
    let result = str1.replace("_", char);
    let finalResult = result === str2? "Matched": "Not Matched";

    console.log(finalResult);
}

rightPlace("Str_ng", "I", "Strong");