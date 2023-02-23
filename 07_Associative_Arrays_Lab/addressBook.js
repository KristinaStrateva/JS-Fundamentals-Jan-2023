function sortingAddressBook(input) {
    let addressBook = {};

    for (const line of input) {
        let [name, address] = line.split(':');

        addressBook[name] = address;
    }

    let addressBookAsArr = Object.entries(addressBook);

    let sortedAddressBook = addressBookAsArr.sort((nameA, nameB) => nameA[0].localeCompare(nameB[0]));
    
    for (const line of sortedAddressBook) {
        let [name, address] = line;

        console.log(`${name} -> ${address}`);
    }
}

sortingAddressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']);