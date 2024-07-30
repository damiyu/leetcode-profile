/*
 * 977: Squares of a Sorted Array
 * Last Updated: Mar 1, 2024
 * Solve Time: 3 min & 26 sec
 */
var sortedSquares = function(nums) {
    let n = nums.length, midPnt = n, squared = new Array(n);

    for (let i = 0; i < n; i++) {
        if (nums[i] >= 0) {
            midPnt = i;
            break;
        } 
    }

    for (let i = 0, j = midPnt - 1, k = midPnt; i < n; i++) {
        if (j < 0 || (k < n && nums[j] * nums[j] > nums[k] * nums[k])) squared[i] = nums[k] * nums[k++];
        else squared[i] = nums[j] * nums[j--];
    }

    return squared;
};

// My Original Solution
/*var sortedSquares = function(nums) {
    let n = nums.length, squared = new Array(n);

    for (let i = 0; i < n; i++) squared[i] = nums[i] * nums[i];
    squared.sort((a, b) => a - b);
    return squared;
};*/