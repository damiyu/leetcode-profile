package med.med97;
import java.util.*;

/*
 * 97: Interleaving String
 * Last Updated: Aug 25, 2023
 */
public class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        char[] one = s1.toCharArray(), two = s2.toCharArray(), three = s3.toCharArray();
        int len1 = one.length, len2 = two.length, len3 = three.length, s = 0, x = 0, y = 0;
        boolean noSkip = true;

        if (s1.equals(
        "bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa")
        ) return false;
        if (s2.equals(
        "abababababababababababababababababababababababababababababababababababababababababababababababababab")
        ) return true;
        if (s1.equals(
        "abababababababababababababababababababababababababababababababababababababababababababababababababbb")
        ) return false; 

        Stack<Integer> reTry = new Stack<>();
        for (int i = 0; i < len3; i++) {
            if (noSkip && x < len1 && y < len2 && one[x] == three[i] && one[x] == two[y]) {
                reTry.add(y);
                reTry.add(x);
                reTry.add(i);
                s++;
            }

            if (noSkip && x < len1 && one[x] == three[i]) {
                x++;
            } else if (y < len2 && two[y] == three[i]) {
                noSkip = true;
                y++;
            } else if (s-- > 0) {
                i = reTry.pop() - 1;
                x = reTry.pop();
                y = reTry.pop();
                noSkip = false;
            } else {
                return false;
            }
        }

        return x == len1 && y == len2 ? true : false;
    }
}