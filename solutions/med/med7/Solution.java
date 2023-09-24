package med.med7;

/*
 * 7: Reverse Integer
 * Last Updated: Jan 5, 2023
 */
public class Solution {
    public int reverse(int x) {
        String intStr = new StringBuilder(String.valueOf(x)).reverse().toString();

        if (intStr.charAt(intStr.length() - 1) == '-') {
            if (intStr.length() == 11 && intStr.compareTo("2147483648-") > 0) {
                return 0;
            }

            return -1 * Integer.parseInt(intStr.substring(0, intStr.length() - 1));
        }
        
        if (intStr.length() == 10 && intStr.compareTo("2147483647") > 0) {
            return 0;
        }
        
        return Integer.parseInt(intStr);
    }
}