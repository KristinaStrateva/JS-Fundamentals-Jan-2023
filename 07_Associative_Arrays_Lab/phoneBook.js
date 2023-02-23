function updatingPhoneBook(input) {
    let phoneBookObj = {};

    for (const line of input) {
        let [name, phoneNumber] = line.split(' ');

        phoneBookObj[name] = phoneNumber;
    }

    for (const key in phoneBookObj) {
        console.log(`${key} -> ${phoneBookObj[key]}`);
    }
}

updatingPhoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);