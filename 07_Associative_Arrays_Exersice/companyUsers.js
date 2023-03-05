function companyUsers(input) {
    let employeeList = {};

    for (const line of input) {
        let [companyName, idNumber] = line.split(' -> ');

        if (!employeeList.hasOwnProperty(companyName)) {
            employeeList[companyName] = [];
        }

        let currEmployeeIDs = employeeList[companyName];

        if (!currEmployeeIDs.includes(idNumber)) {
            currEmployeeIDs.push(idNumber);
        }
    }

    let sortedCompanies = Object.entries(employeeList).sort((a, b) => a[0].localeCompare(b[0]));

    for (const company of sortedCompanies) {
        let currCompaniyIDs = company[1];

        console.log(`${company[0]}`);

        for (const idNumber of currCompaniyIDs) {
            console.log(`-- ${idNumber}`);
        }
    }
}

companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ]);