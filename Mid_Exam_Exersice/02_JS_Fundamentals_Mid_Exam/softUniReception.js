function calculatingTime(input) {
    let employeeOneLimit = Number(input.shift());
    let employeeTwoLimit = Number(input.shift());
    let employeeThreeLimit = Number(input.shift());
    let studentsAmount = Number(input.shift());
    let hours = 0;

    while (studentsAmount > 0) {
        studentsAmount -= employeeOneLimit;

        studentsAmount -= employeeTwoLimit;

        studentsAmount -= employeeThreeLimit;

        hours++;

        if (hours % 4 === 0) {
            hours++;
        }
    }

    return `Time needed: ${hours}h.`;
}

console.log(calculatingTime(['5','6','4','20']));