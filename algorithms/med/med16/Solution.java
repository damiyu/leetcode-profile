package med.med16;
import java.util.*;

/*
 * 16: 3Sum Closest
 * Last Updated: Aug 22, 2023
 * Solve Time: 19 min & 18 sec
 */
public class Solution {
    public int threeSumClosest(int[] nums, int target) {
        int len = nums.length, min = 100000, val;

        Arrays.sort(nums);
        for (int i = 0; i < len - 2 && nums[i] < Math.abs(min); i++) {
            if (i > 0 && nums[i - 1] == nums[i]) continue;

            for (int j = i + 1, k = len - 1; j < k;) {
                val = nums[i] + nums[j] + nums[k];

                if (val == target) return target;
                else if (val < target) j++;
                else k--;

                if (Math.abs(target - val) < Math.abs(target - min)) min = val;
            }
        }

        return min;
    }
}

// My Original Solution
/*class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int min = -100000;

        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                for (int k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] == target) {
                        return target;
                    } else if (target - (nums[i] + nums[j] + nums[k]) > 0) {
                        if (target - (nums[i] + nums[j] + nums[k]) < target - min) {
                            min = nums[i] + nums[j] + nums[k];
                        }
                    } else if (-1 * (target - (nums[i] + nums[j] + nums[k])) < target - min) {
                        min = nums[i] + nums[j] + nums[k];
                    }
                }
            }
        }

        return min;
    }
}*/