function arenaTier(input) {
    let index = 0;
    let command = input[index];
    index++;

    let gladiatorsInfo = {};

    while (command !== 'Ave Cesar') {
        if (command.includes('->')) {
            let [gladiatorName, technique, skill] = command.split(' -> ');
            skill = Number(skill);

            if (!gladiatorsInfo[gladiatorName]) {
                gladiatorsInfo[gladiatorName] = [{[technique]: skill}, skill];

            } else {
                let currGladiator = gladiatorsInfo[gladiatorName];

                if (currGladiator[0].hasOwnProperty(technique)) {
                    if (currGladiator[0][technique] < skill) {

                        currGladiator[1] += skill - currGladiator[0][technique];
                        currGladiator[0][technique] = skill;
                    }

                } else {
                    currGladiator[0][technique] = skill;
                    currGladiator[1] += skill;
                }
            }

        } else if (command.includes('vs')) {
            let [gladiatorOne, gladiatorTwo] = command.split(' vs ');

            if (gladiatorsInfo.hasOwnProperty(gladiatorOne) && gladiatorsInfo.hasOwnProperty(gladiatorTwo)) {
                let gladiatorOneTechniques = gladiatorsInfo[gladiatorOne][0];
                let hasInCommon = false;

                for (const technique in gladiatorOneTechniques) {
                    if (gladiatorsInfo[gladiatorTwo][0].hasOwnProperty(technique)) {
                        hasInCommon = true;
                        break;                        
                    }
                }
                
                if (hasInCommon) {
                    if (gladiatorsInfo[gladiatorOne][1] > gladiatorsInfo[gladiatorTwo][1]) {
                        delete gladiatorsInfo[gladiatorTwo];
                    } else if (gladiatorsInfo[gladiatorOne][1] < gladiatorsInfo[gladiatorTwo][1]) {
                        delete gladiatorsInfo[gladiatorOne];
                    }
                }
            }
        }

        command = input[index];
        index++;
    }

    let sortedGladiators = Object.entries(gladiatorsInfo)
        .sort((a, b) => {
            return b[1][1] - a[1][1] || a[0].localeCompare(b[0]);
        });

    for (const gladiator of sortedGladiators) {
        console.log(`${gladiator[0]}: ${gladiator[1][1]} skill`);

        let sortedTechniques = Object.entries(gladiator[1][0])
            .sort((a, b) => {
                return b[1] - a[1] || a[0].localeCompare(b[0]);
            })

        for (const technique of sortedTechniques) {
            console.log(`- ${technique[0]} <!> ${technique[1]}`);
        }
    }
}

arenaTier([

    'Peter -> BattleCry -> 400',
    
    'Alex -> PowerPunch -> 300',
    
    'Stefan -> Duck -> 200',
    
    'Stefan -> Tiger -> 250',
    
    'Ave Cesar'
    
    ]);