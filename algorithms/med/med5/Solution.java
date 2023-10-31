package med.med5;
import java.util.*;

/*
 * 5: Longest Palindromic Substring
 * Last Updated: Oct 27, 2023
 */
public class Solution {
    public String longestPalindrome(String s) {
        char[] sArray = s.toCharArray();
        int n = s.length(), idx = 0;

        for (int i = n; i > 1; i--) {
            for (int j = 0; j + i <= n; j++) {
                for (idx = 0; idx < i / 2; idx++) {
                    if (sArray[idx + j] != sArray[(i - 1 - idx + j)]) break;
                }

                if (idx == i / 2) return new String(Arrays.copyOfRange(sArray, j, j + i));
            }
        }

        return new String("" + sArray[0]);
    }
}

// My Original Solution
/*public class Solution {
    public String longestPalindrome(String s) {
        String pal = s.substring(0, 1);
        int len = s.length();
        boolean isPal = false;

        for (int i = 0; i < len; i += 1) {
            for (int j = 1; j < len - i; j += 1) {
                String sub = s.substring(i, len - j + 1);
                int subLen = sub.length();
                int check = subLen / 2;

                for (int k = 0; k < check; k += 1) {
                    if (sub.charAt(k) != sub.charAt(subLen - k - 1)) {
                        isPal = false;
                        break;
                    }

                    isPal = true;
                }

                if (isPal && subLen > pal.length()) {
                    pal = sub;

                    if (subLen >= len - i - 1) {
                        return pal;
                    }
                }
            }
        }

        return pal;
    }
}*/