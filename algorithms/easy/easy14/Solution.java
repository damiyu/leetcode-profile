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

// My Original Solution
/*class Solution {
    public String longestCommonPrefix(String[] strs) {
        String pre = "";
        char save = 0, cur = 0;

        if (strs[0].length() == 0) return pre;
        
        for (int i = 0; i < strs[0].length(); i++) {
            save = strs[0].charAt(i);

            for (String str : strs) {
                if (str.length() <= i || str.charAt(i) != save) {
                    return pre;
                }
            }

            pre += save;
        }

        return pre;
    }
}*/