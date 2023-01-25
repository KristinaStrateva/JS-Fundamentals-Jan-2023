function maxSequence(input) {

    let prevArr = [];
    let longestArr = [];
    let equalNewArrPrevArrCounter = 0;
    let leftmostArr = [];
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        let newArr = [];
        let currNum = input[i];
        let nextNum = input[i + 1];

        if (currNum === nextNum) {
            newArr.push(currNum);

            for (let j = i + 1; j < inputLength; j++) {
                if (input[j] === input[j + 1]) {
                    newArr.push(input[j]);
                } else {
                    newArr.push(input[j]);
                    break;
                }
            }
            
        } else {
            continue;
        }

        if (newArr.length > prevArr.length) {
            longestArr = newArr;
        } else if (newArr.length === prevArr.length) {
            equalNewArrPrevArrCounter++;

            if ( equalNewArrPrevArrCounter === 1) {
                leftmostArr = prevArr;
            } else {
                equalNewArrPrevArrCounter = 0;
            }
        }

        prevArr = newArr;
    }

    if (equalNewArrPrevArrCounter >= 1 && leftmostArr.length > longestArr.length) {
        console.log(leftmostArr.join(' '));
    } else {
        console.log(longestArr.join(' '));
    }
}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);