import java.util.*;
class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> out = new ArrayList<>();
        List<Integer> part;
        Integer[] nums = new Integer[k];
        
        for (byte i = 0; i < k; i++) nums[i] = i + 1;
        part = new ArrayList<>(Arrays.asList(nums));
        out.add(part);
        if (n == k) return out;
        while (nums[0] < n - k + 1) {
            while (nums[k - 1] < n) {
                nums[k - 1] += 1;
                part = new ArrayList<>(Arrays.asList(nums));
                out.add(part);
            }

            for (int i = 1; i < k; i++) {
                if (nums[i] == n - k + i + 1) {
                    nums[i - 1] += 1;
                    for (int j = i; j < k; j++) {
                        nums[j] = nums[j - 1] + 1;
                    }
                    part = new ArrayList<>(Arrays.asList(nums));
                    out.add(part);
                    break;
                }
            }
        }

        return out;
    }
}