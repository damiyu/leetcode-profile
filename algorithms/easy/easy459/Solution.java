package easy.easy459;
import java.util.*;

/*
 * 459: Repeated Substring Pattern
 * Last Updated: Sep 3, 2023
 */

public class Solution {
    public boolean repeatedSubstringPattern(String s) {
        Set<String> com = new HashSet<>();
        int[] cnt = new int[26];
        int idx = 0, len = s.length() + 1;
        
        for (char c : s.toCharArray()) cnt[c - 'a']++;
        for (int i = 2, j = 0; i < len; i++) {
            for (int n : cnt) {
                if (n % i != 0) break;
                j++;
            }

            if (j == 26) {
                idx = i;
                break;
            }
            j = 0;
        }

        if (idx == 0) return false;
        len--;
        idx = len / idx;
        for (int i = 0; i < len; i += idx) {
            if (com.size() > 1) return false;
            com.add(s.substring(i, i + idx));
        }

        return com.size() == 1;
    }
}