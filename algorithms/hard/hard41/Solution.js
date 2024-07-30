/*
 * 41: First Missing Positive
 * Last Updated: Mar 25, 2024
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) if (nums[i] <= 0 || nums[i] > n) nums[i] = n + 1;
    for (let i = 0; i < n; i++) {
        const val = Math.abs(nums[i]) - 1;

        if (val == n) continue;
        else if (nums[val] > 0) nums[val] *= -1;
    }
    for (let i = 0; i < n; i++) if (nums[i] > 0) return i + 1;

    return n + 1;
};