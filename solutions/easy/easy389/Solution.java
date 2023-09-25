package easy.easy389;

/*
 * 389: Find the Difference
 * Last Updated: Sep 25, 2023
 * Solve Time: 5 min & 45 sec
 */
public class Solution {
    public char findTheDifference(String s, String t) {
        int sCnt = 0;

        for (char c : s.toCharArray()) sCnt += c;
        for (char c : t.toCharArray()) sCnt -= c;
        return (char) -sCnt;
    }
}

// My Original Solution
/*class Solution {
    public char findTheDifference(String s, String t) {
        int[] abc = new int[26];

        for (char c : s.toCharArray()) abc[c - 'a']++;
        for (char c : t.toCharArray()) {
            if (--abc[c - 'a'] < 0) {
                return c;
            }
        }

        return 'a';
    }
}*/