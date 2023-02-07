function maxBonusPoints(input) {
    let studentsAmount = Number(input.shift());
    let lecturesAmount = Number(input.shift());
    let additionalBouns = Number(input.shift());
    let maxBonus = 0;
    let bestStudentAttendance = 0;
    
    for (let i = 0; i < studentsAmount; i++) {
        let currStudentAttendance = Number(input[i]);

        let totalBonus = currStudentAttendance / lecturesAmount * (5 + additionalBouns);

        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            bestStudentAttendance = currStudentAttendance;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${bestStudentAttendance} lectures.`);
}

maxBonusPoints([
    '0', '30', '14'
  ]  
  );