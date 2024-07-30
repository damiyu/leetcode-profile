/*
 * 442: Find All Duplicates in an Array
 * Last Updated: Mar 25, 2024
 * Solve Time: 3 min & 57 sec
 */
var findDuplicates = function(nums) {
    const n = nums.length, copies = new Array;

    for (let i = 0; i < n; i++) {
        const pos = Math.abs(nums[i]) - 1;

        if (nums[pos] > 0) nums[pos] *= -1;
        else copies.push(pos + 1);
    }

    return copies;
};