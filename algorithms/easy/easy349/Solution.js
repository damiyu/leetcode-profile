/*
 * 349: Intersection of Two Arrays
 * Last Updated: Mar 10, 2024
 * Solve Time: 4 min & 17 sec
 */
var intersection = function(nums1, nums2) {
    let n = nums1.length, m = nums2.length, cnts = new Array(1001).fill(0), arr = [];

    for (let i = 0; i < n; i++) cnts[nums1[i]] = 1;
    for (let i = 0; i < m; i++) {
        if (cnts[nums2[i]]) {
            arr.push(nums2[i]);
            cnts[nums2[i]] = 0;
        }
    }

    return arr;
};