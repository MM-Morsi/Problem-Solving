// Solution One - recurrent 
function sumRe(array) {
    // stopping criteria 
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + sumRe(array.slice(1));
    }
}

function maximumWealth(accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = sumRe(accounts[i]);

        if (sum > maxWealth) {
            maxWealth = sum;
        }
    }
    return maxWealth;
};


// Solution Two - iterative
var maximumWealth = function (accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }

        if (sum > maxWealth) {
            maxWealth = sum;
        }
    }
    return maxWealth;
};

// Solution Three - reduce
var maximumWealth = function (accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = accounts[i].reduce((a, b) => a + b, 0);

        if (sum > maxWealth) {
            maxWealth = sum;
        }
    }
    return maxWealth;
};


// Concept illustration
// Slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // takes from index 2 and forward 
console.log(animals.slice(1, 3)); // takes from index 1 to 3 (not including 3)

// Reduce callback function     
// method executes a user-supplied "reducer" callback function on each element of the array
// in order, passing in the return value from the calculation on the preceding element
const array = [1, 2, 3, 4, 5];
console.log(array.reduce((a, b) => a + b, 0)); // sum of array

// Testing git hub changes 
console.log("test")
