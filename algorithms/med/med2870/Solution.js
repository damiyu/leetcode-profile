/*
 * 2870: Minimum Number of Operations to Make Array Empty
 * Last Updated: Jan 4, 2024
 * Solve Time: 19 min & 32 sec
 */
var minOperations = function(nums) {
    let n = nums.length, minOps = 0, mod = 0, cnt = 1;

    nums.sort((x, y) => x - y);
    nums[n] = -1;
    for (let i = 1; i < n + 1; i++) {
        if (nums[i] == nums[i - 1]) {
            cnt++;
        } else {
            if (cnt == 1) return -1;

            mod = cnt % 3;
            switch (mod) {
                case 0:
                    minOps += cnt / 3;
                    break;
                case 1:
                    minOps += 1 + Math.floor(cnt / 3);
                    break;
                case 2:
                    minOps += 1 + Math.floor(cnt / 3);
                    break;
                default:
                    return -1;
            }
            cnt = 1;
        }
    }
    return minOps;
}