// https://leetcode.com/problems/perfect-squares/discuss/71660/JavaScript-solution

function numSquares(n) {
    const dp = [0];
    for (let i = 1; i <= n; i++) {
        dp[i] = Number.MAX_VALUE;
        // console.log(dp[i]);
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            // console.log(dp[i]);
        }
    }
    return dp[n];
}

console.log(numSquares(12));