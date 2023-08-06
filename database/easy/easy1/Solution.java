package easy.easy1;
import java.util.*;

/*
 * 1: Two Sum
 * Last Updated: Jul 29, 2023
 */
public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> m = new HashMap<Integer, Integer>();
        int d = 0;

        for (int i = 0; i < nums.length; i++) {
            d = target - nums[i];
            if (m.containsKey(d)) {
                return new int[] {m.get(d), i};
            }
            m.put(nums[i], i);
        }

        return new int[] {0, 1};
    }
}