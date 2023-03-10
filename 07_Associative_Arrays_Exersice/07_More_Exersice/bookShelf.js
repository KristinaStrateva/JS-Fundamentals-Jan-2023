function bookShelf(input) {
    let shelfInfo = {};

    for (const line of input) {
        if (line.includes('->')) {
            let [shelf, genre] = line.split(' -> ');

            if (!shelfInfo[shelf]) {
                shelfInfo[shelf] = {[genre]: []};
            }

        } else if (line.includes(':')) {
            let [bookInfo, currGenre] = line.split(', ');
            let [bookTitle, author] = bookInfo.split(': ');

            for (const shelf in shelfInfo) {
                if (shelfInfo[shelf][currGenre]) {
                    (shelfInfo[shelf][currGenre]).push({[bookTitle]: author});
                }
            }
        }
    }

    let sortedShelves = Object.entries(shelfInfo).sort((a, b) => Object.entries(b[1])[0][1].length - Object.entries(a[1])[0][1].length);

    for (const [shelf, genreInfo] of sortedShelves) {
        let [genre, books] = Object.entries(genreInfo)[0];
        let booksAmount = books.length;

        console.log(`${shelf} ${genre}: ${booksAmount}`);

        let sortedBooks = books.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));

        for (const book of sortedBooks) {
            let [bookTitle, bookAuthor] = Object.entries(book)[0];

            console.log(`--> ${bookTitle}: ${bookAuthor}`);
        }
    }
}

bookShelf([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history',
]);