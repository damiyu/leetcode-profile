package med.med215;
import java.util.*;

/*
 * 215: Kth Largest Element in an Array
 * Last Updated: Aug 13, 2023
 * Solve Time: 3 min & 18 sec
 */
public class Solution {
    public int findKthLargest(int[] nums, int k) {
        Arrays.sort(nums);
        
        return nums[nums.length - k];
    }
}