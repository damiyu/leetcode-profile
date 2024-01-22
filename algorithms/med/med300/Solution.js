/*
 * 300: Longest Increasing Subsequence
 * Last Updated: Jan 5, 2024
 */
var lengthOfLIS = function(nums) {
    let n = nums.length, dp = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
    }
    return Math.max(...dp) + 1;
}