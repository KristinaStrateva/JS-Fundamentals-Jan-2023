function commonElements(input1, input2) {
    let input1Length = input1.length;
    let input2Length = input2.length;

    for (let i = 0; i < input1Length; i++) {
        let currChar1 = input1[i];
        for (let j = 0; j < input2Length; j++) {
            let currChar2 = input2[j];

            if (currChar1 === currChar2) {
                console.log(currChar1);
            } else {
                continue;
            }
        }
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

['s', 'o', 'c', 'i', 'a', 'l']);