function login(input) {
    let index = 0;
    let username = input[index];
    index++;

    let password = "";

    for (let i = username.length - 1; i >= 0; i--) {
        let currentChar = username.charAt(i);

        password += `${currentChar}`;
    }

    let currentPassword = input[index];
    index++;

    let counter = 0;

    while (currentPassword !== password) {
        counter++;

        if (counter > 3) {
            console.log (`User ${username} blocked!`);

            break;
        }

        console.log("Incorrect password. Try again.");

        currentPassword = input[index];
        index++;
    }

    if (currentPassword === password) {
        console.log(`User ${username} logged in.`);
    }
}

login(['sunny','rainy','cloudy','ynnus','not sunny']);