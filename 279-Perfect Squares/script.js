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

//  Second trial
const findAllPerfectSquares = function (num, numbers) {
    if (num === 0) {
        return numbers;
    }
    if (isSquare(num)) {
        numbers.push(num);
    }
    findAllPerfectSquares(num - 1, numbers);
    return numbers;
}

numbers = []
testNum(findAllPerfectSquares(12, numbers));

// Now we need to find the least numbers that are perfect squares and sum up to the given number
// Still not enough. We are ignoring the possibility of replication
// Also not good for normal cases like 7 = 4 + 1 + 1 + 1
// const findAllSumCombinations = function (numbers, num) {
//     let combinations = [];
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === num) {
//                 combinations.push([numbers[i], numbers[j]]);
//             }
//         }
//     }
//     return combinations;
// }

// numbers = []
// testNum(findAllSumCombinations(findAllPerfectSquares(7, numbers), 7));