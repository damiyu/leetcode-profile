/*
 * 2540: Minimum Common Value
 * Last Updated: Mar 8, 2024
 * Solve Time: 2 min & 56 sec
 */
var getCommon = function(nums1, nums2) {
    let n = nums1.length, m = nums2.length, i = 0, j = 0;

    while (i < n && j < m) {
        if (nums1[i] == nums2[j]) return nums1[i];
        else if (i < n && nums1[i] < nums2[j]) i++;
        else j++;
    }

    return -1;
};

// My Original Solution
/*var getCommon = function(nums1, nums2) {
    let n = nums1.length, m = nums2.length;

    for (let i = 0; i < n; i++) {
        let target = nums1[i], left = 0, right = m, mid = m >> 1;

        while (left < mid) {
            if (nums2[mid] == target) {
                return target;
            } else if (nums2[mid] < target) {
                left = mid;
                mid = (left + right) >> 1;
            } else {
                mid = (mid + left) >> 1;
            }
        }

        if (nums2[mid] == target) return target;
    }

    return -1;
};*/