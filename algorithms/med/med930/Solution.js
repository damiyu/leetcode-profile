/*
 * 930: Binary Subarrays With Sum
 * Last Updated: Mar 14, 2024
 * Solve Time: 3 min & 43 sec
 */
var numSubarraysWithSum = function(nums, goal) {
    return subarrays(nums, goal) - subarrays(nums, goal - 1);
};

function subarrays(nums, goal) {
    let n = nums.length, cnt = 0;

    if (goal < 0) return 0;

    for (let i = 0, j = 0; i < n; i++) {
        goal -= nums[i];

        while (goal < 0) goal += nums[j++];
        cnt += i - j + 1;
    }

    return cnt;
}

// My Original Solution
/*var numSubarraysWithSum = function(nums, goal) {
    let n = nums.length, cnt = 0;

    for (let i = 0; i < n; i++) {
        let sum = 0;

        for (let j = i; j < n; j++) {
            sum += nums[j];

            if (sum == goal) cnt++;
            else if (sum > goal) break;
        }
    }

    return cnt;
};*/