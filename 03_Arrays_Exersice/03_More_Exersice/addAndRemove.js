function addAndRemove(strings) {
    let stringsLength = strings.length;
    let newArr = [];
    let initialNum = 0;

    for (let i = 0; i < stringsLength; i++) {
        let currCommand = strings[i];
        initialNum++;

        if (currCommand === 'add') {
            newArr.push(initialNum);
        }
        if (currCommand === 'remove') {
            newArr.splice(newArr.length - 1, 1);
        }
    }

    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}

addAndRemove(['remove', 'remove', 'add', 'add', 'remove']);