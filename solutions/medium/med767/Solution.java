package medium.med767;
import java.util.*;

/*
 * 767: Reorganize String
 * Last Updated: Aug 23, 2023
 */
public class Solution {
    public String reorganizeString(String s) {
        char[] chars = s.toCharArray();
        short[] cnt = new short[26];
        int len = chars.length;
        short n = 1;

        if (len == 1) return s;
        for (char c : chars) cnt[c - 'a']++;
        Arrays.sort(cnt);
        for (byte i = 0; i < 25; i++) n += cnt[i];
        if (n < cnt[25]) return "";

        boolean swap = true;
        char a, b, c;
        while (swap) {
            swap = false;

            for (int i = 0; i < len - 1; i++) {
                a = chars[i];
                b = chars[i + 1];

                if (a == b) {
                    for (int j = i + 1; j != i; j++) {
                        c = chars[j];
                        
                        if (c != b) {
                            chars[j] = b;
                            chars[i + 1] = c;
                            swap = true;
                            break;
                        } else if (j == len - 1) {
                            j = -1;
                        }
                    }
                }
            }
        }

        return new String(chars);
    }
}