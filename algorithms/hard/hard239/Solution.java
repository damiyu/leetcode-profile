package hard.hard239;

/*
 * 239: Sliding Window Maximum
 * Last Updated: Aug 18, 2023
 * Solve Time: 53 min & 21 sec
 */
public class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int len = nums.length, cnt = len + 1 - k, idx = -1, temp;

        int[] max = new int[cnt];
        for (int i = 0; i < cnt; i++) {
            if (i <= idx) {
                temp = nums[idx];

                if (temp <= nums[i + k - 1]) {
                    idx = i + k - 1;
                    temp = nums[idx];
                }
            } else {
                temp = nums[i];
                idx = i;

                for (int j = 1; j < k; j++) {
                    if (temp <= nums[i + j]) {
                        idx = i + j;
                        temp = nums[idx];
                    }
                }
            }

            max[i] = temp;
        }

        return max;
    }
}