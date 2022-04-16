const isSquare = function (num) {
    let sqrt = Math.sqrt(num);
    if (sqrt === 0) {
        return false;
    }
    if (sqrt % 1 !== 0) {
        return false;
    }
    return true;
}

const testNum = function (fnc) {
    console.log(fnc);
}

const findNearestPerfectSquare = function (num) {
    if (num === 0) {
        return 0;
    }
    if (isSquare(num)) {
        return num;
    }
    num = findNearestPerfectSquare(num - 1);
    return num;
}

const returnNumbers = function (num, numbers) {
    nearestPerfectSquare = findNearestPerfectSquare(num);
    numbers.push(nearestPerfectSquare);
    difference = num - nearestPerfectSquare;
    if (nearestPerfectSquare === num) {
        return num;
    }
    returnNumbers(difference, numbers);
    return numbers;
}

// testNum(isSquare(5));
// testNum(isSquare(4));
// testNum(isSquare(12));
// testNum(isSquare(1));
// testNum(isSquare(0));
// testNum(findNearestPerfectSquare(0));

let numbers = []
testNum(returnNumbers(13, numbers));

