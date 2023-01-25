function ladybugs(input) {
    // separating each index of the input

    let inputLength = input.length;
    let fieldWithLadybugsPositionsOnItArr = [];
    fieldWithLadybugsPositionsOnItArr.length = input[0];
    let fieldSizeLength = fieldWithLadybugsPositionsOnItArr.length;
    let indexesWithLadybugs = input[1].toString();
    let indexesWithLadybugsLength = indexesWithLadybugs.length;

    // finding initial ladybugs' positions;

    for (let fieldIndex = 0; fieldIndex < fieldSizeLength; fieldIndex++) {
        let currIndex = fieldIndex;
        fieldWithLadybugsPositionsOnItArr[fieldIndex] = 0;

        for (let i = 0; i < indexesWithLadybugsLength; i += 2) {
            let currIndexWithLadybug = Number(indexesWithLadybugs[i]);

            if (currIndex === currIndexWithLadybug) {
                fieldWithLadybugsPositionsOnItArr[fieldIndex] = 1;
                break;
            } else {
                continue;
            }
        }
    }

    // follow ladybugs' moves

    for (let inputIndex = 2; inputIndex < inputLength; inputIndex++) {
        let currMove = input[inputIndex].toString();
        let currMoveLength = currMove.length;

        let ladybugPositionToMove = '';
        let ladybugDirectionToMove = '';
        let ladybugStepsToMove = '';
        let counter = 0;

        for (let j = 0; j < currMoveLength; j++) {
            let char = currMove[j];

            if (char !== ' ') {
                if (counter === 0) {
                    ladybugPositionToMove += char;
                } else if (counter === 1) {
                    ladybugDirectionToMove += char;
                } else {
                    ladybugStepsToMove += char;
                }
            } else {
                counter++;
                continue;
            }
        }

        ladybugPositionToMove = Number(ladybugPositionToMove);
        ladybugStepsToMove = Number(ladybugStepsToMove);

        // check the current ladybug move

        if (fieldWithLadybugsPositionsOnItArr[ladybugPositionToMove] === 0 || ladybugPositionToMove < 0 || ladybugPositionToMove >= fieldSizeLength) {
            continue;
        }

        fieldWithLadybugsPositionsOnItArr[ladybugPositionToMove] = 0;

        if (ladybugStepsToMove < 0) {
            if (ladybugDirectionToMove === 'right') {
                ladybugDirectionToMove = 'left';
            } else if (ladybugDirectionToMove === 'left') {
                ladybugDirectionToMove = 'right';
            }

            ladybugStepsToMove = Math.abs(ladybugStepsToMove);
        }

        let nextPositionToCheck = 0;

        if (ladybugDirectionToMove === 'right') {
            nextPositionToCheck = ladybugPositionToMove + ladybugStepsToMove;
        } else if (ladybugDirectionToMove === 'left') {
            nextPositionToCheck = ladybugPositionToMove - ladybugStepsToMove;
        }

        while (fieldWithLadybugsPositionsOnItArr[nextPositionToCheck] === 1) {
            if (ladybugDirectionToMove === 'right') {
                nextPositionToCheck += ladybugStepsToMove;
            } else if (ladybugDirectionToMove === 'left') {
                nextPositionToCheck -= ladybugStepsToMove;
            }
        }

        if (nextPositionToCheck > fieldSizeLength - 1 || nextPositionToCheck < 0) {
            continue;
        }

        fieldWithLadybugsPositionsOnItArr[nextPositionToCheck] = 1;

        
    }

    console.log(fieldWithLadybugsPositionsOnItArr.join(' '));
}

ladybugs([ 5, '3', '3 left 2', '1 left -2']);