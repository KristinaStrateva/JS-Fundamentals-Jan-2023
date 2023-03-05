function aMinerTask(input) {
    let resourses = {};
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i += 2) {
        let currResourse = input[i];
        let currResourseQuantity = Number(input[i + 1]);

        if (!resourses.hasOwnProperty(currResourse)) {
            resourses[currResourse] = 0;
        }

        resourses[currResourse] += currResourseQuantity;
    }

    for (const resourse in resourses) {
        console.log(`${resourse} -> ${resourses[resourse]}`);
    }
}

aMinerTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])