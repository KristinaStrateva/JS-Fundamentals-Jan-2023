function nextDay(year, month, day) {
    if (year < 10) {
        year = Number(`190${year}`);
    } else if (year < 100) {
        year = Number(`19${year}`);
    }

    let nextDay = 0;

    if (((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && month === 2) {
        if (day === 29) {
            nextDay = 1;
            month++;
        } else {
            nextDay = day + 1;
        }

    } else {
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            if (day === 31) {
                if (month === 12) {
                    nextDay = 1;
                    month = 1;
                    year++;
                } else {
                    nextDay = 1;
                    month++;
                }
                
            } else {
                nextDay = day + 1;
            }

        } else {
            if (day === 30) {
                nextDay = 1;
                month++;
            } else {
                nextDay = day + 1;
            }
        }
    }

    console.log(`${year}-${month}-${nextDay}`);
}

nextDay(2020, 12, 31);