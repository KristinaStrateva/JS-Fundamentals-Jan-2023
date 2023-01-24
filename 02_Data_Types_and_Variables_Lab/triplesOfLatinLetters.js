function triplesOfLatinLetters(str) {
    
    for (let i = 0; i < str; i++) {
        for (let j = 0; j < str; j++) {
            for (let k = 0; k < str; k++) {
                let letter1 = String.fromCharCode(97 + i);
                let letter2 = String.fromCharCode(97 + j);
                let letter3 = String.fromCharCode(97 + k);

                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}

triplesOfLatinLetters("3");