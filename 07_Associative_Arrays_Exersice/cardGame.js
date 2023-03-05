function cardGame(input) {
    let players = {};

    for (const player of input) {
        let [name, cards] = player.split(': ');
        let hand = [];

        cardsToCheck = cards.split(', ');

        for (const card of cardsToCheck) {
            if (!hand.includes(card)) {
                hand.push(card);
            }
        }
        
        if (!players.hasOwnProperty(name)) {
            players[name] = hand;

        } else {
            let currHand = players[name];

            for (const card of hand) {
                if (!currHand.includes(card)) {
                    currHand.push(card);
                }
            }

            players[name] = currHand;
        }
    }

    for (const player in players) {
        
        console.log(`${player}: ${multiplication(players[player])}`);
    }

    function multiplication(arr) {
        let finalPoints = 0;

        for (const card of arr) {
            let cardPower = card[0];
            let cardType = card[1];
            let cardTypePower = 0;

            if (!isNaN(cardPower)) {
                if (card.length === 3) {
                    cardPower = Number(card[0] + card[1]);
                    cardType = card[2];

                } else {
                    cardPower = Number(cardPower);
                }

            } else {
                switch (cardPower) {
                    case 'J': cardPower = 11; break;
                    case 'Q': cardPower = 12; break;
                    case 'K': cardPower = 13; break;
                    case 'A': cardPower = 14; break;
                }
            }

            switch (cardType) {
                case 'S': cardTypePower = 4; break;
                case 'H': cardTypePower = 3; break;
                case 'D': cardTypePower = 2; break;
                case 'C': cardTypePower = 1; break;
            }

            finalPoints += cardPower * cardTypePower;
        }

        return finalPoints;
    }
}

cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ]);

console.log('-------------------');

cardGame([

    'John: 2C, 4H, 9H, AS, QS',
    
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'John: JD, JD, JD, JD'
    
    ])