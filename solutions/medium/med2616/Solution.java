package medium.med2616;
import java.util.*;

/*
 * 2616: Minimize the Maximum Difference of Pairs
 * Last Updated: Aug 9, 2023
 */
public class Solution {
    public int minimizeMax(int[] nums, int p) {
        Arrays.sort(nums);

        int best = 0, worst = nums[nums.length - 1] - nums[0], f = 0, m = (best + worst) >> 1;
        while (best < worst) {
            for (int i = 0; f < p && i < nums.length - 1; i++) {
                if (nums[i + 1] - nums[i] <= m) {
                    i++;
                    f++;
                }
            }

            best = f < p ? ++m : best;
            worst = p <= f ? m : worst;
            m = (best + worst) >> 1;
            f = 0;
        }
        
        return best;
    }
}