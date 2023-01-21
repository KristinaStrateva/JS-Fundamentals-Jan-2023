function distanceBetweenPoints(x1, y1, x2, y2) {
    let vertical = y1 - y2;
    let horizontal = x2 - x1;

    let distance = Math.sqrt((Math.pow(vertical, 2) + Math.pow(horizontal, 2)));

    console.log(distance);
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);