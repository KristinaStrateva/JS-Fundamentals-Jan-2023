function vacation(groupAmount, groupType, weekDay) {
    let price = 0;

    if (groupType === "Students") {
        if (weekDay === "Friday") {
            price = 8.45;
        } else if (weekDay === "Saturday") {
            price = 9.8;
        } else if (weekDay === "Sunday") {
            price = 10.46;
        }

    } else if (groupType === "Business") {
        if (weekDay === "Friday") {
            price = 10.9;
        } else if (weekDay === "Saturday") {
            price = 15.6;
        } else if (weekDay === "Sunday") {
            price = 16;
        }

    } else if (groupType === "Regular") {
        if (weekDay === "Friday") {
            price = 15;
        } else if (weekDay === "Saturday") {
            price = 20;
        } else if (weekDay === "Sunday") {
            price = 22.5;
        }
    }

    let totalPrice = groupAmount * price;

    if (groupType === "Students" && groupAmount >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === "Business" && groupAmount >= 100) {
        totalPrice = (groupAmount - 10) * price;
    } else if (groupType === "Regular" && groupAmount >= 10 && groupAmount <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(40,

    "Regular",
    
    "Saturday");