/*
 * 42: Trapping Rain Water
 * Last Updated: Apr 27, 2024
 */
var trap = function(height) {
    let [l, r] = [0, height.length - 1];
    let leftMax = rightMax = totalWater = 0;

    while (l <= r) {
        if (leftMax < rightMax) {
            leftMax = Math.max(leftMax, height[l]);
            totalWater += leftMax - height[l];
            l++;
        } else {
            rightMax = Math.max(rightMax, height[r]);
            totalWater += rightMax - height[r];
            r--;
        }
    }
    return totalWater;
};