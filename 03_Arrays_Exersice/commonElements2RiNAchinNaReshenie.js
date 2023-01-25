function commonElemenst(input1, input2) {
    
    for (let element of input1) {
        if (input2.includes(element)) {
            console.log(element);
        }
    }
}

commonElemenst(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2']);