function movieInformation(input) {
    let inputLength = input.length;
    let movies = [];

    for (let i = 0; i < inputLength; i++) {
        let currCommand = input[i];

        if (currCommand.includes('addMovie')) {
            let name = currCommand.split('addMovie ')[1];
            movies.push({ name });

        } else {
            if (currCommand.includes('directedBy')) {
                let [name, director] = currCommand.split(' directedBy ');
                let movieToCheck = movies.find(obj => obj.name === name);

                if (movieToCheck) {
                    movieToCheck.director = director;
                }

            } else if (currCommand.includes('onDate')) {
                let [name, date] = currCommand.split(' onDate ');
                let movieToCheck = movies.find(obj => obj.name === name);

                if (movieToCheck) {
                    movieToCheck.date = date;
                }
            }
        }
    }

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}

movieInformation([

    'addMovie Fast and Furious',

    'addMovie Godfather',

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis Ford Coppola',

    'Godfather onDate 29.07.2018',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'

]);