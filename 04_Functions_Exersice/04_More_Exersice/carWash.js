function carWash(arrayOfCommands) {
    let value = 0;
    
    function commandSoap() {
        value += 10;
        return value;
    }
    
    function commandWater() {
        value *= 1.2;
        return value;
    }
    
    function commandVacuumCleaner() {
        value *= 1.25;
        return value;
    }
    
    function commandMud() {
        value *= 0.9;
        return value;
    }

    let arrayOfCommandsLength = arrayOfCommands.length;

    for (let command = 0; command < arrayOfCommandsLength; command++) {
        let currCommand = arrayOfCommands[command];

        switch (currCommand) {
            case 'soap': commandSoap(); break;
            case 'water': commandWater(); break;
            case 'vacuum cleaner': commandVacuumCleaner(); break;
            case 'mud': commandMud(); break;
        }
    }

    let result = `The car is ${value.toFixed(2)}% clean.`
    return result;
}

console.log(carWash(["soap", "water", "mud", "mud", "water", "mud",

"vacuum cleaner"]));