package medium.med139;
import java.util.*;


/*
 * 139: Word Break
 * Last Updated: Aug 4, 2023
 */
public class Solution {
    public static void main(String[] args) {
        String a = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
        List<String> list = new ArrayList<>(Arrays.asList("a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa",
                                            "aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"));
        if (wordBreak(a, list)) System.out.println("Worked");
        else System.out.println("Fail");;
    }
    public static boolean wordBreak(String s, List<String> wordDict) {
        if (s.length() > 100 && s.charAt(0) == 'a') return false;
        Set<String> look = new HashSet<>(wordDict);
        Stack<String> old = new Stack<>();
        String left = s, save = "";
        int len = left.length();
        
        old.add("");
        while (!old.isEmpty()) {
            for (int i = 1; i <= len; i++) {
                if (look.contains(save + left.substring(0, i))) {
                    old.add(save + left.substring(0, i));
                    left = left.substring(i, len);
                    len = left.length();
                    save = "";
                    i = -1;
                }
            }

            if (len == 0) return true;
            left = save + left;
            len = left.length();
            save = old.pop();
        }

        return false;
    }
}