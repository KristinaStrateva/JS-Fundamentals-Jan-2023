function pointsValidation(arrOfNums) {
    let firstPointX = arrOfNums[0];
    let firstPointY = arrOfNums[1];
    let secondPointX = arrOfNums[2];
    let secondPointY = arrOfNums[3];
    let zeroPointX = 0;
    let zeroPointY = 0;

    function distanceBetweenXAnd0(point1X, point1Y) {
        let distanceXAnd0 = Math.sqrt(Math.pow(point1X, 2) + Math.pow(point1Y, 2));
        let resultX0 = ``;

        if (Number.isInteger(distanceXAnd0)) {
            resultX0 = `{${point1X}, ${point1Y}} to {${zeroPointX}, ${zeroPointY}} is valid`;
        } else {
            resultX0 = `{${point1X}, ${point1Y}} to {${zeroPointX}, ${zeroPointY}} is invalid`;
        }

        return resultX0;
    }

    function distanceBetweenYAnd0(point2X, point2Y) {
        let distanceYAnd0 = Math.sqrt(Math.pow(point2X, 2) + Math.pow(point2Y, 2));
        let resultY0 = ``;

        if (Number.isInteger(distanceYAnd0)) {
            resultY0 = `{${point2X}, ${point2Y}} to {${zeroPointX}, ${zeroPointY}} is valid`;
        } else {
            resultY0 = `{${point2X}, ${point2Y}} to {${zeroPointX}, ${zeroPointY}} is invalid`;
        }

        return resultY0;
    }

    function distanceBetweenXAndY(point1X, point1Y, point2X, point2Y) {
        let distanceXAndY = Math.sqrt(Math.pow(Math.abs(point2X - point1X), 2) + Math.pow(Math.abs(point2Y - point1Y), 2));
        let resultXY = ``;

        if (Number.isInteger(distanceXAndY)) {
            resultXY = `{${point1X}, ${point1Y}} to {${point2X}, ${point2Y}} is valid`;
        } else {
            resultXY = `{${point1X}, ${point1Y}} to {${point2X}, ${point2Y}} is invalid`;
        }

        return resultXY;
    }

    let midResult = `${distanceBetweenXAnd0(firstPointX, firstPointY)}\n${distanceBetweenYAnd0(secondPointX, secondPointY)}`;
    let finalResult = `${midResult}\n${distanceBetweenXAndY(firstPointX, firstPointY, secondPointX, secondPointY)}`;

    return finalResult;    
}

console.log(pointsValidation([-2, -1, -5, -2]));