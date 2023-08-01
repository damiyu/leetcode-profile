import java.util.*;
class Solution {
    public int minimumDeleteSum(String s1, String s2) {
        Map<Character, Integer> m1 = new HashMap<>();
        Map<Character, Integer> m2 = new HashMap<>();
        int t = 0;

        for (int i = 0; i < s1.length(); i++) {
            if (m1.containsKey(s1.charAt(i))) {
                m1.put(s1.charAt(i), m1.get(s1.charAt(i)) + 1);
            } else {
                m1.put(s1.charAt(i), 1);
            }
        }

        for (int i = 0; i < s2.length(); i++) {
            if (m2.containsKey(s2.charAt(i))) {
                m2.put(s2.charAt(i), m2.get(s2.charAt(i)) + 1);
            } else {
                m2.put(s2.charAt(i), 1);
            }
        }

        for (char c = 97; c < 123; c++) {
            if (m1.containsKey(c) && m2.containsKey(c)) {
                t += m1.get(c) < m2.get(c) ? c * (m2.get(c) - m1.get(c)) : c * (m1.get(c) - m2.get(c));
            } else if (m1.containsKey(c)) {
                t += c * m1.get(c);
            } else if (m2.containsKey(c)) {
                t += c * m2.get(c);
            }
        }

        return t;
    }
}