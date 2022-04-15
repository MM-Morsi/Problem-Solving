var maximumWealth = function (accounts) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < accounts.length; i++) {

        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
            // console.log(sum)
        }
        if (sum >= max) {
            max = sum;
        }
        sum = 0;
    }
    return max;
}

accounts = [[1, 2, 3], [3, 2, 1]];
console.log(maximumWealth(accounts));