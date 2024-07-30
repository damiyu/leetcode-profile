/*
 * 713: Subarray Product Less Than K
 * Last Updated: Mar 27, 2024
 * Solve Time: 5 min & 11 sec
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let n = nums.length, left = 0, right = 0, prod = 1, cnt = 0;

    if (k <= 1) return 0;
    while (right < n) {
        prod *= nums[right];

        while (prod >= k) prod /= nums[left++];
        cnt += (right - left) + 1;
        right++;
    }

    return cnt;
};

// My Original Solution
/*var numSubarrayProductLessThanK = function(nums, k) {
    let n = nums.length, cnt = 0;

    for (let i = 0; i < n; i++) {
        let prod = 1;
    
        for (let j = i; j < n; j++) {
            prod *= nums[j];

            if (prod >= k) break;
            cnt++;
        }
    }

    return cnt;
};*/