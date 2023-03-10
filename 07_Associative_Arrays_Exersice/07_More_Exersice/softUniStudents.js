function softUniStudents(input) {

    class StudentInfo {
        constructor(studentName, studentCredit, studentEmail) {
            this.name = studentName;
            this.credit = studentCredit;
            this.email = studentEmail
        }
    };

    let softUniCourses = {};

    for (const line of input) {
        if (line.includes(':')) {
            let [courseName, currCapacity] = line.split(': ');
            currCapacity = Number(currCapacity);

            if (!softUniCourses[courseName]) {
                softUniCourses[courseName] = {capacity: 0, studentsInfo: []};
            }

            softUniCourses[courseName].capacity += currCapacity;

        } else if (line.includes('email')) {
            let [userInfo, emailAndCourse] = line.split('] with email ');
            let [studentName, studentCredit] = userInfo.split('[');
            let [studentEmail, courseToCheck] = emailAndCourse.split(' joins ');
            studentCredit = Number(studentCredit);

            if (softUniCourses[courseToCheck] && softUniCourses[courseToCheck].capacity > 0) {
                softUniCourses[courseToCheck].capacity--;

                let currStudent = new StudentInfo(studentName, studentCredit, studentEmail);

                (softUniCourses[courseToCheck].studentsInfo).push(currStudent);
            }
        }
    }

    let sortedCourses = Object.entries(softUniCourses).sort((a, b) => Object.entries(b[1])[1][1].length - Object.entries(a[1])[1][1].length);

    for (const [course, courseInfo] of sortedCourses) {
        let leftPlaces = courseInfo.capacity;

        console.log(`${course}: ${leftPlaces} places left`);

        let sortedStudents = (courseInfo.studentsInfo).map(x => Object.entries(x)).sort((a, b) => b[1][1] - a[1][1]);

        for (const student of sortedStudents) {
            let userName = student[0][1];
            let credits = student[1][1];
            let email = student[2][1];

            console.log(`--- ${credits}: ${userName}, ${email}`);
        }
    }
}

softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore',
]);