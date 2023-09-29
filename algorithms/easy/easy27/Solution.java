package easy.easy27;

/*
 * 27: Remove Element
 * Last Updated: Sep 17, 2023
 * Solve Time: 9 min & 52 sec
 */
public class Solution {
    public int removeElement(int[] nums, int val) {
        int len = nums.length, valCnt = 0;
        int[] newNums = new int[len];

        for (byte i = 0, j = 0; i < len; i++) {
            if (nums[i] == val) valCnt++;
            else newNums[j++] = nums[i];
        }

        for (byte i = 0; i < len - valCnt; i++) nums[i] = newNums[i];
        return len - valCnt;
    }
}