package hard.hard2366;

/*
 * 2366: Minimum Replacements to Sort the Array
 * Last Updated: Aug 30, 2023
 */
public class Solution {
    public long minimumReplacement(int[] nums) {
        long cnt = 0;
        int splitCnt, cur, prev;

        for (int i = nums.length - 2; i > -1; i--) {
            cur = nums[i];
            prev = nums[i + 1];

            if (cur > prev) {
                splitCnt = cur / prev;
                if (cur % prev > 0) splitCnt++;
                cnt += splitCnt - 1;
                nums[i] /= splitCnt;
            }
        }

        return cnt;
    }
}