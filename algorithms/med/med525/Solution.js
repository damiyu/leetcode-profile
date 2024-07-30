/*
 * 525: Contiguous Array
 * Last Updated: Mar 16, 2024
 */
var findMaxLength = function(nums) {
    let n = nums.length, sum = 0, maxLen = 0, map = new Map;

    map.set(0, -1);
    for (let i = 0; i < n; i++) {
        sum += nums[i] == 1 ? 1 : -1;

        const a = map.get(sum);
        if (a != undefined) maxLen = maxLen > i - a ? maxLen : i - a;
        else map.set(sum, i);
    }

    return maxLen;
};