package med.med8;

/*
 * 8: String to Integer (atoi)
 * Last Updated: Mar 12, 2023
 */
public class Solution {
    public int myAtoi(String s) {
        String t = "";
        boolean sta = false;
        boolean zero = true;

        for (int i = 0; i < s.length(); i += 1) {
            char c = s.charAt(i);
            
            if (!sta) {
                if (c == ' ') {
                    continue;
                } else if (c == '+' || c == '-' || (c >= 48 && c <= 57)) {
                    sta = true;
                    if (zero && c == 48) {
                        continue;
                    }
                    if (c >= 48 && c <= 57) {
                        zero = false;
                    }
                    t += c;
                    continue;
                } else {
                    return 0;
                }
            }

            if (c < 47 || c > 58) {
                break;
            } else {
                if (zero && c == 48) {
                    continue;
                }
                t += c;
                zero = false;
            }
        }

        if (t.length() == 0) {
            return 0;
        }

        if (t.charAt(0) == '+') {
            if (t.length() > 11 || (t.length() == 11 && t.compareTo("+2147483647") > 0)) {
                return 2147483647;
            } else if (t.length() == 1) {
                return 0;
            }
        } else if (t.charAt(0) == '-') {
            if (t.length() > 11 || (t.length() == 11 && t.compareTo("-2147483648") > 0)) {
                return -2147483648;
            } else if (t.length() == 1) {
                return 0;
            }
        } else {
            if (t.length() > 10 || (t.length() == 10 && t.compareTo("2147483647") > 0)) {
                return 2147483647;
            }
        }

        return Integer.parseInt(t);
    }
}