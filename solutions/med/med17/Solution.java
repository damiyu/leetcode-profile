package med.med17;
import java.util.*;

/*
 * 17: Letter Combinations of a Phone Number
 * Last Updated: Aug 3, 2023
 */
public class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> s = new ArrayList<>();
        byte size = (byte) digits.length();
        if (size == 0) return s;

        char[][] dig = {{'a','b','c'},{'d','e','f'},{'g','h','i'},{'j','k','l'},{'m','n','o'},
                        {'p','q','r','s'},{'t','u','v'},{'w','x','y','z'}};
        char[] org = digits.toCharArray();
        char[] com = new char[size];
        byte[] idx = new byte[size];
        byte[] max = new byte[size];
        int num = 1;
        for (byte i = 0; i < size; i++) {
            com[i] = dig[org[i] - 50][0];
            max[i] = (byte) dig[org[i] - 50].length;
            num *= dig[org[i] - 50].length;
        }
        s.add(new String(com));
        num--;

        while (num > 0) {
            idx[0] += 1;
            if (idx[0] == max[0]) {
                idx[0] = 0;
                idx[1] += 1;
                for (byte i = 1; i < size - 1; i++) {
                    if (max[i] <= idx[i]) {
                        idx[i] = 0;
                        idx[i + 1] += 1;
                    }
                }
            }

            for (byte i = 0; i < size; i++) com[i] = dig[org[i] - 50][idx[i]];
            s.add(new String(com));
            num--;
        }
        return s;
    }
}

// My Original Solution
/*class Solution {
    public List<String> letterCombinations(String digits) {
        Map<Character, String> dig = new HashMap<>();
        String row = "";
        char curChar = 'a';
        byte size = (byte) digits.length();
        for (char i = 50; i < 58; i++) {
            if (i == 55 || i == 57) {
                for (byte j = 0; j < 4; j++) {
                    row += curChar++;
                }
                dig.put(i, row);
            } else {
                for (byte j = 0; j < 3; j++) {
                    row += curChar++;
                }
                dig.put(i, row);
            }
            row = "";
        }

        List<String> s = new ArrayList<>();
        if (size == 0) return s;
        char[] com = new char[size];
        byte[] idx = new byte[size];
        byte[] max = new byte[size];
        int num = 1;
        for (byte i = 0; i < size; i++) {
            com[i] = dig.get(digits.charAt(i)).charAt(0);
            idx[i] = 0;
            max[i] = (byte) (dig.get(digits.charAt(i)).length() - 1);
            num *= dig.get(digits.charAt(i)).length();
        }
        s.add(new String(com));
        num--;

        while (num > 0) {
            idx[0] += 1;
            if (idx[0] > max[0]) {
                idx[0] = 0;
                idx[1] += 1;
                for (byte i = 1; i < idx.length - 1; i++) {
                    if (idx[i] > max[i]) {
                        idx[i] = 0;
                        idx[i + 1] += 1;
                    }
                }
            }

            for (byte i = 0; i < idx.length; i++) {
                com[i] = dig.get(digits.charAt(i)).charAt(idx[i]);
            }
            s.add(new String(com));
            num--;
        }

        return s;
    }
}*/