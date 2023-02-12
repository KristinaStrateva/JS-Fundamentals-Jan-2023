function listOfEmployees(employees) {
    let list = {};
    let employeesLength = employees.length;

    for (let i = 0; i < employeesLength; i++) {
        list[employees[i]] = employees[i].length;
    }

    // list[employees[i]] is equal to list[name] also equal to list.name => this is the KEY
    // employees[i].length is the VALUE for that key
    // This is the way how to insert current key -> its name is literally the name from the input
    //
    // list {
    //    'Silas Butler': 12  -> 'Silas Butler' is the key name and 12 is this key's value
    // }

    for (const key in list) {
        console.log(`Name: ${key} -- Personal Number: ${list[key]}`);
    }
}

listOfEmployees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

]);