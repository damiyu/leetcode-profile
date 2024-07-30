/*
 * 2962: Count Subarrays Where Max Element Appears at Least K Times
 * Last Updated: Mar 29, 2024
 * Solve Time: 33 min & 23 sec
 */
var countSubarrays = function(nums, k) {
    const n = nums.length, maxNum = Math.max(...nums);
    let = freq = 0, left = 0, cnt = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] == maxNum) freq++;

        if (freq == k) {
            cnt += n - i;

            while (freq == k) {
                if (nums[left++] == maxNum) freq--;
                else cnt += n - i;
            }
        }
    }

    return cnt;
};