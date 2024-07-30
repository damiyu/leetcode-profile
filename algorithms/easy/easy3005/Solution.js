/*
 * 3005: Count Elements With Maximum Frequency
 * Last Updated: Mar 7, 2024
 * Solve Time: 6 min & 34 sec
 */
var maxFrequencyElements = function(nums) {
    let n = nums.length, cnts = new Array(100).fill(0), maxNum = 0, maxFreq = 0, sum = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] > maxNum) maxNum = nums[i];
        cnts[nums[i] - 1]++;
    }
    for (let i = 0; i < maxNum; i++) {
        if (cnts[i] > maxFreq) sum = (maxFreq = cnts[i]);
        else if (cnts[i] == maxFreq) sum += maxFreq;
    }

    return sum;
};