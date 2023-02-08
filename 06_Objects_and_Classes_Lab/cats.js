function catClass(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < input.length; i++) {
        let currCatName = input[i].split(' ')[0];
        let currCatAge = Number(input[i].split(' ')[1]);

        let newCat = new Cat(currCatName, currCatAge);
        newCat.meow();
    }
}

catClass(['Mellow 2', 'Tom 5']);