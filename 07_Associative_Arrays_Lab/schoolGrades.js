function studentsGrades(input) {
    let grades = {};

    for (const student of input) {
        let [studentName, ...currGrades] = student.split(' ');

        if (!grades[studentName]) {
            grades[studentName] = currGrades.map(Number);
        } else {
            grades[studentName].push(...currGrades.map(Number));
        }
    }

    let gradesAsArr = Object.entries(grades);

    let sortedGrades = gradesAsArr.sort((studentA, studentB) => studentA[0].localeCompare(studentB[0]));

    for (const student of sortedGrades) {
        let averageGrade = student[1].reduce((a, b) => a + b, 0) / student[1].length;
        console.log(`${student[0]}: ${averageGrade.toFixed(2)}`);
    }
}

studentsGrades(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6']);