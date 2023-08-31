package medium.med15;
import java.util.*;

/*
 * 15: 3Sum
 * Last Updated: Aug 15, 2023
 */
public class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> coms = new ArrayList<>();
        int val;

        Arrays.sort(nums);
        for (int i = 0; i < nums.length && nums[i] <= 0; i++) {
            if (i > 0 && nums[i - 1] == nums[i]) continue;

            for (int j = i + 1, k = nums.length - 1; j < k;) {
                val = nums[i] + nums[j] + nums[k];

                if (val == 0) {
                    coms.add(Arrays.asList(nums[i], nums[j++], nums[k--]));
                    while (j < k && nums[j - 1] == nums[j]) j++;
                    while (j < k && nums[k + 1] == nums[k]) k--;
                } else if (val < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }

        return coms;
    }
}