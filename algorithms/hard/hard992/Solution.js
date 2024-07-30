/*
 * 992: Subarrays with K Different Integers
 * Last Updated: Mar 29, 2024
 * Solve Time: 34 min & 6 sec
 */
var subarraysWithKDistinct = function(nums, k) {
    const n = nums.length, freqs = new Map;
    let cnt = 0, left = 0, unique = 0;

    for (let i = 0; i < n; i++) {
        if (!freqs[nums[i]]) {
            freqs[nums[i]] = 0;
            unique++;
        }

        freqs[nums[i]]++;
        while (unique > k) if (--freqs[nums[left++]] == 0) unique--;
        if (unique == k) {
            let curLeft = left, copy = new Map;

            while (unique == k) {
                copy[nums[curLeft]] = copy[nums[curLeft]] ? copy[nums[curLeft]] + 1 : 1;
                if (freqs[nums[curLeft]] - copy[nums[curLeft++]] == 0) break;
            }

            cnt += curLeft - left;
        }
    }

    return cnt;
};