/*
 * 2444: Count Subarrays With Fixed Bounds
 * Last Updated: Apr 28, 2024
 */
var countSubarrays = function(nums, minK, maxK) {
    let cnt = 0, badIdx = -1, leftIdx = -1, rightIdx = -1;

    for (let i = 0; i < nums.length; ++i) {
        if (!(minK <= nums[i] && nums[i] <= maxK)) badIdx = i;
        if (nums[i] === minK) leftIdx = i;
        if (nums[i] === maxK) rightIdx = i;

        cnt += Math.max(0, Math.min(leftIdx, rightIdx) - badIdx);
    }

    return cnt;
};