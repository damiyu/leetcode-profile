package med.med1218;
import java.util.*;

/*
 * 1218: Longest Arithmetic Subsequence of Given Difference
 * Last Updated: Aug 4, 2023
 */
public class Solution {
    public int longestSubsequence(int[] arr, int difference) {
        Set<Integer> oldNums = new HashSet<>();
        int len = arr.length, max = 1, curNum, curMax;

        for (int i = 0; i < len; i++) {
            if (oldNums.contains(curNum = arr[i])) continue;
            oldNums.add(curNum);

            curMax = 1;
            for (int j = i + 1; j < len; j++) {
                if (curNum + difference == arr[j]) {
                    oldNums.add(curNum = arr[j]);
                    curMax++;
                }
            }
            if (max < curMax) max = curMax;   
        }

        return max;
    }
}