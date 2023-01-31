function sortBy2Criteria(input) {
    let result = input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    });
    
    result.forEach(element => {
        console.log(element);
    });
}

sortBy2Criteria(['alpha', 'beta', 'gamma']);