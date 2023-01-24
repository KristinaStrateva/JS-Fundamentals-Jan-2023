function chessBoard(number) {
    console.log('<div class="chessboard">');

    let counter = 0;

    for (let i = 0; i < number; i++) {
        console.log('   <div>');

        for (let j = 0; j < number; j++) {
            counter++;

            if (counter % 2 !== 0) {
                console.log('       <span class="black"></span>');
            } else {
                console.log('       <span class="white"></span>');
            }

            if (j === number - 1) {
                if (j % 2 !== 0) {
                    counter++;
                }
            }
        }

        console.log('   </div>');
    }

    console.log('</div>');
}

chessBoard(3);