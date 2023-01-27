function formatGrade(grade) {
    let gradeAnotation = '';

    if (grade >= 2 && grade < 3) {
        gradeAnotation = 'Fail';
    } else if (grade < 3.5) {
        gradeAnotation = 'Poor';
    } else if (grade < 4.5) {
        gradeAnotation = 'Good';
    } else if (grade < 5.5) {
        gradeAnotation = 'Very good';
    } else if (grade <= 6) {
        gradeAnotation = 'Excellent';
    }

    if (gradeAnotation === 'Fail') {
        return `${gradeAnotation} (2)`;
    } else {
        return `${gradeAnotation} (${grade.toFixed(2)})`;
    }
}

console.log(formatGrade(3.33));