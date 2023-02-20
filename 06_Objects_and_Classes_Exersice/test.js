function shop(input) {
    let list = input.shift().split("!");


    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let command = tokens[0];
        let values = tokens.slice(1);


        switch (command) {
            case "Urgent":
                if (!(list.includes(values[0]))) {
                    list.unshift(values[0]);
                }
                break;
            case "Unnecessary":
                if ((list.includes(values[0]))) {
                    list = list.filter(x => x !== values[0]);
                }
                break;
            case "Correct":

                if ((list.includes(values[0]))) {
                    list.splice(list.indexOf(values[0]), 1, values[1]);
                }
                break;
            case "Rearrange":
                if ((list.includes(values[0]))) {

                    list.splice(list.indexOf(values[0]), 1);
                    list.push(values[0]);
                }
                break;
            case "Go":
                console.log(list.join(", "));
                break;
        }
    }
}

shop(["",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])