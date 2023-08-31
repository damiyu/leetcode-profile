package easy.easy14;
import java.util.*;

/*
 * 14: Longest Common Prefix
 * Last Updated: Aug 11, 2023
 * Solve Time: 9 min & 54 sec
 */
public class Solution {
    public String longestCommonPrefix(String[] strs) {
        Arrays.sort(strs);
        
        String front = strs[0], back = strs[strs.length - 1];
        int p = 0;
        for (; p < front.length() && front.charAt(p) == back.charAt(p); p++) {}
        return front.substring(0, p);
    }
}