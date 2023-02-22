function schoolRegister(input) {
    let studentsInfo = [];

    for (let line of input) {
        let studentName = line.split(', ')[0].split(': ')[1];
        let grade = Number(line.split(', ')[1].split(': ')[1]);
        let averageScore = Number(line.split(', ')[2].split(': ')[1]);

        if (averageScore >= 3) {
            studentsInfo.push({ studentName: studentName, grade: grade, averageScore: averageScore });
        }
    }

    let sortedStudentInfo = studentsInfo.sort((a, b) => a.grade - b.grade);

    for (let i = 0; i < sortedStudentInfo.length; i++) {
        let currStudent = sortedStudentInfo[i];
        let nextStudent = sortedStudentInfo[i + 1];
        let counter = 1;
        let averageScore = currStudent.averageScore;
        let listOfStudents = `${currStudent.studentName}`;

        while (i < sortedStudentInfo.length - 1 && currStudent.grade === nextStudent.grade) {
            listOfStudents += `, ${nextStudent.studentName}`;
            counter++;
            averageScore += nextStudent.averageScore;
            i++;

            currStudent = sortedStudentInfo[i];
            nextStudent = sortedStudentInfo[i + 1];
        }

        let finalAvegrageScore = averageScore / counter;

        console.log(`${currStudent.grade + 1} Grade`);
        console.log(`List of students: ${listOfStudents}`);
        console.log(`Average annual score from last year: ${finalAvegrageScore.toFixed(2)}`);
        console.log();
    }
}

schoolRegister([

    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",

    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",

    "Student name: George, Grade: 8, Graduated with an average score: 2.83",

    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",

    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",

    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",

    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",

    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",

    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",

    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",

    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",

    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);