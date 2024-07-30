/*
 * 2958: Length of Longest Subarray With at Most K Frequency
 * Last Updated: Mar 27, 2024
 * Solve Time: 17 min & 43 sec
 */
var maxSubarrayLength = function(nums, k) {
    const n = nums.length, cnts = new Map;
    let maxSize = 0, curSize = 0;

    for (let i = 0, j = 0; j < n; j++) {
        const curNum = nums[j];
        cnts[curNum] = cnts[curNum] ? cnts[curNum] + 1 : 1;

        while (cnts[curNum] > k) {
            cnts[nums[i++]]--;
            curSize--;
        }
        maxSize = maxSize > ++curSize ? maxSize : curSize;
    }

    return maxSize;
};