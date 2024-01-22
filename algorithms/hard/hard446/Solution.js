/*
 * 446: Arithmetic Slices II - Subsequence
 * Last Updated: Jan 6, 2024
 */
var numberOfArithmeticSlices = function(nums) {
    let n = nums.length, tot = 0, dp = new Array(n);

    for (let i = 0; i < n; i++) dp[i] = new Map();
    for (let i = 1; i < n; i++) {
        let val = nums[i];

        for (let j = 0; j < i; j++) {
            let diff = val - nums[j];

            if (dp[j].has(diff)) {
                dp[i].set(diff, (dp[i].get(diff) || 0) + dp[j].get(diff));
                tot += dp[j].get(diff);
            }

            dp[i].set(diff, (dp[i].get(diff) || 0) + 1);
        }
    }

    return tot;
}