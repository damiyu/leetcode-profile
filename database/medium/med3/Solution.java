package medium.med3;
import java.util.*;

/*
 * 3: Longest Substring Without Repeating Characters
 * Last Updated: Jul 30, 2023
 */
public class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<Byte> m = new HashSet<>();
        byte cur = 0;
        int max = 0;

        for (char i = 0, j = 0; i < s.length();) {
            if (m.contains((byte) s.charAt(i))) {
                m.remove((byte) s.charAt(j++));
                cur--;
            } else {
                m.add((byte) s.charAt(i++));
                max = max < ++cur ? cur : max;
            }
        }

        return max;
    }
}