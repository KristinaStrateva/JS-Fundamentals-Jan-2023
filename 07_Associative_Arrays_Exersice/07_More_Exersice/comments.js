function comments(input) {
    let usersList = [];
    let articlesList = [];
    let usersComments = {};

    for (const line of input) {
        if (line.includes('user')) {
            let currUser = line.split('user ')[1];

            usersList.push(currUser);

        } else if (line.includes('article')) {
            let currArticle = line.split('article ')[1];

            articlesList.push(currArticle);

        } else if (line.includes('posts')) {
            let userName = line.split(' posts on ')[0];
            let articleName = line.split(' posts on ')[1].split(': ')[0];
            let [commentTitle, commentContent] = line.split(': ')[1].split(', ');

            if (usersList.includes(userName) && articlesList.includes(articleName)) {

                if (!usersComments[articleName]) {
                    usersComments[articleName] = [];
                }

                if (!usersComments[articleName].hasOwnProperty(userName)) {
                    (usersComments[articleName]).push({ [userName]: { [commentTitle]: commentContent } });
                }
            }
        }
    }

    let sortedArticles = Object.entries(usersComments)
        .sort((a, b) => Object.entries(b[1]).length - Object.entries(a[1]).length);

    for (const article of sortedArticles) {
        console.log(`Comments on ${article[0]}`);

        let sortedUsers = article[1].map(x => Object.entries(x)).sort((a, b) => a[0][0].localeCompare(b[0][0]));

        for (const user of sortedUsers) {
            let [commentTitle, commentContent] = Object.entries(user[0][1])[0];

            console.log(`--- From user ${user[0][0]}: ${commentTitle} - ${commentContent}`);
        }
    }
}

comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);