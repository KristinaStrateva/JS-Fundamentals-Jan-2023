function legendaryFarming(string) {
    let tokens = string.split(' ');
    let tokensLength = tokens.length;

    let items = {
        'Shadowmourne': {'shards': 0},
        'Valanyr': {'fragments': 0},
        'Dragonwrath': {'motes': 0},
    };

    let junk = {};

    let whoObtained = '';

    for (let i = 0; i < tokensLength; i += 2) {
        let quantity = Number(tokens[i]);
        let material = tokens[i + 1].toLowerCase();
        let isReached = false;

        switch (material) {
            case 'shards':
                items['Shadowmourne']['shards'] += quantity;

                if (items.Shadowmourne.shards >= 250) {
                    items.Shadowmourne.shards -= 250;
                    isReached = true;
                    whoObtained = 'Shadowmourne';
                    break;
                }

                break;

            case 'fragments':
                items['Valanyr']['fragments'] += quantity;

                if (items.Valanyr.fragments >= 250) {
                    items.Valanyr.fragments -= 250;
                    isReached = true;
                    whoObtained = 'Valanyr';
                    break;
                }

                break;

            case 'motes':
                items['Dragonwrath']['motes'] += quantity;

                if (items.Dragonwrath.motes >= 250) {
                    items.Dragonwrath.motes -= 250;
                    isReached = true;
                    whoObtained = 'Dragonwrath';
                    break;
                }
            
                break;

            default:              
                if (!junk.hasOwnProperty(material)) {
                    junk[material] = 0;
                }

                junk[material] += quantity;

                break;
        }

        if (isReached) {
            console.log(`${whoObtained} obtained!`);
            break;
        }
    }

    let itemsEntries = Object.entries(items);
    let sortedKeyMaterials = itemsEntries.map(x => x[1])
        .sort((a, b) => {
            return Object.values(b) - Object.values(a) || (Object.keys(a)[0]).localeCompare(Object.keys(b)[0]);
        });
        
    
    for (const keyMaterial of sortedKeyMaterials) {
        console.log(`${Object.keys(keyMaterial)}: ${Object.values(keyMaterial)}`);
    }

    let sortedJunkMaterials = Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (const junk of sortedJunkMaterials) {
        console.log(`${junk[0]}: ${junk[1]}`);
    }
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');