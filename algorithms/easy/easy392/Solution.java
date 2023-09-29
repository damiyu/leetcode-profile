package easy.easy392;

/*
 * 392: Is Subsequence
 * Last Updated: Sep 21, 2023
 * Solve Time: 4 min & 17 sec
 */
public class Solution {
    public boolean isSubsequence(String s, String t) {
        char[] sArray = s.toCharArray();
        int len = sArray.length, idx = 0;

        for (char c : t.toCharArray()) {
            if (idx == len) break;
            else if (sArray[idx] == c) idx++;
        }
        return idx == len;
    }
}