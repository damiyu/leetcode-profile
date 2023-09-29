package med.med15;
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

// My Original Solution
/*class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> com = new ArrayList<>();
        Set<Integer> mem1 = new HashSet<>(), mem2 = new HashSet<>();
        Map<Integer, Integer> newNums = new HashMap<>();

        Arrays.sort(nums);
        for (int num : nums) {
            if (!newNums.containsKey(num)) {
                newNums.put(num, 1);
            } else {
                newNums.replace(num, newNums.get(num) + 1);
            }
        }

        for (int i = 0; i < nums.length && nums[i] <= 0; i++) {
            if (!mem1.contains(nums[i])) {
                for (int j = i + 1; j < nums.length; j++) {
                    if (!mem2.contains(nums[j])) {

                        if (newNums.containsKey(-1 * (nums[i] + nums[j]))) {
                            newNums.replace(nums[i], newNums.get(nums[i]) - 1);
                            newNums.replace(nums[j], newNums.get(nums[j]) - 1);

                            if (newNums.get(-1 * (nums[i] + nums[j])) > 0 && -1 * (nums[i] + nums[j]) >= nums[j]) {
                                com.add(Arrays.asList(nums[i],nums[j],-1 * (nums[i] + nums[j])));
                            }

                            newNums.replace(nums[i], newNums.get(nums[i]) + 1);
                            newNums.replace(nums[j], newNums.get(nums[j]) + 1);
                        }

                        mem2.add(nums[j]);
                    }
                }

                mem1.add(nums[i]);
                mem2.clear();
            }
        }

        return com;
    }
}*/