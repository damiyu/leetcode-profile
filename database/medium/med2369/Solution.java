package medium.med2369;

/*
 * 2369: Check if There is a Valid Partition For The Array
 * Last Updated: Aug 13, 2023
 */
public class Solution {
    public boolean validPartition(int[] nums) {
        boolean[] tab = new boolean[nums.length + 1];
        tab[0] = true;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) {
                tab[i + 1] |= tab[i - 1];
            }

            if (i > 1) {
                if (nums[i] == nums[i - 1] && nums[i] == nums[i - 2]) {
                    tab[i + 1] |= tab[i - 2];
                }
                
                if (nums[i] == nums[i - 1] + 1 && nums[i] == nums[i - 2] + 2) {
                    tab[i + 1] |= tab[i - 2];
                }
            }
        }

        return tab[nums.length];
    }
}